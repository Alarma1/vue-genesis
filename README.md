Задача:  
⦁	На фронтенде: создать три компонента, выполнить определенные манипуляции через API amoCRM, отобразить результат  
⦁	Будет плюсом сделать бекенд: принять запрос с фронтенда, выполнить определенные манипуляции через API amoCRM, вернуть на фронтенд данные

Фронтэнд:  
Сверстать на Vue3 следующие компоненты:  
⦁	Выпадающий список (dropdown)  
⦁	Кнопка  
⦁	Область отображения результата списка созданных ID сущностей. 

Преимуществом будет:  
⦁	реализация на Pinia  
⦁	использование Composition API + TypeScript  
⦁	реализация переиспользуемых компонентов

Обязательное требование:  
⦁	Прелоадер на кнопку в виде крутящегося круга

Функционал фронтенда:  
⦁	В выпадающем списке пользователь выбирает одну из трех сущностей, которую нужно создать в amoCRM: Сделка, Контакт, Компания.  
⦁	По нажатию на кнопку “Создать” с фронтенда уходит POST-запрос (contenttype=application/json) на API amoCRM, создается выбранная сущность, в теле ответа API присылает ID созданной сущности и http код ответа 200, либо текст ошибки и соответствующий http-код ответа.  
⦁	В случае успешного создания сущности отображаем название сущности и её идентификатор в области отображения результатов. Результаты накапливаем, должны отображаться все ID и имена сущностей, созданных с момента открытия окна браузера.

В выпадающем списке отображаем четыре элемента:  
⦁	Не выбрано  
⦁	Сделка  
⦁	Контакт  
⦁	Компания  
По-умолчанию в списке выбран первый элемент “Не выбрано”. При выбранном элементе “Не выбрано” кнопку “Создать” делаем неактивной (на белом фоне). При иных выбранных элементах кнопку делаем активной (на синем фоне).  
Будет плюсом: стек реализации задачи: Vue3 (Composition API + TypeScript), Pinia, Vite, axios

Бекенд: 
Реализовать следующий функционал:  
⦁	Авторизоваться по OAuth2 и получить токен для API  
⦁	Создать запрашиваемую сущность "Сделка", "Контакт" или "Компания" (выбранную на фронте сущность в выпадающем списке) с помощью POST-запроса  
⦁	Отправить в ответе полученный ID сущности
