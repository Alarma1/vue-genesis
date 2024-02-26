import {defineStore} from 'pinia';
import axios from 'axios';
import type {
    ResponseDataToken,
    CounterStoreState,
    ResponseDataCompany,
    ResponseDataContact,
    ResponseDataLead
} from '../assets/interface/index';

export const useCounterStore = defineStore('counter', {
    state: (): CounterStoreState => ({
        tokenDomain: 'https://test.gnzs.ru/oauth/get-token.php',
        dropDownMenuValue: false,
        downloadData: false,
        responseData: [],
        accessToken: '',
        baseDomain: ''
    }),
    actions: {
        dropDownMenuValueMutations(elem: string) {
            this.dropDownMenuValue = elem !== '' && elem !== 'Не выбрано';
        },

        async receivingToken() {
            try {
                const response = await axios.get<ResponseDataToken>(
                    this.tokenDomain,
                    {headers: {"X-Client-Id": 31550986},}
                );
                this.accessToken = response.data.access_token
                this.baseDomain = response.data.base_domain
            } catch (error) {
                console.error('Ошибка получения токена:', error);
            }
        },
        async requestDeal() {
            this.downloadData = true;
            try {
                const response = await axios.post<ResponseDataLead>(
                    `https://${this.baseDomain}/api/v4/leads`,
                    [{}],
                    {headers: {Authorization: `Bearer ${this.accessToken}`},}
                );
                this.responseData.push({
                    id: response.data._embedded.leads[0].id,
                    name: 'Сделка',
                });
            } catch (error) {
                console.error('Ошибка создания сделки:', error);
            } finally {
                this.downloadData = false;
            }
        },

        async requestContact() {
            this.downloadData = true;
            try {
                const response = await axios.post<ResponseDataContact>(
                    `https://${this.baseDomain}/api/v4/contacts`,
                    [{}],
                    {
                        headers: {Authorization: `Bearer ${this.accessToken}`},
                    }
                );
                this.responseData.push({
                    id: response.data._embedded.contacts[0].id,
                    name: 'Контакт',
                });
            } catch (error) {
                console.error('Ошибка создания контакта:', error);
            } finally {
                this.downloadData = false;
            }
        },

        async requestCompany() {
            this.downloadData = true;
            try {
                const response = await axios.post<ResponseDataCompany>(
                    `https://${this.baseDomain}/api/v4/companies`,
                    [{}],
                    {
                        headers: {Authorization: `Bearer ${this.accessToken}`},
                    }
                );
                this.responseData.push({
                    id: response.data._embedded.companies[0].id,
                    name: 'Компания',
                });
            } catch (error) {
                console.error('Ошибка создания компании:', error);
            } finally {
                this.downloadData = false;
            }
        },
    },
});
