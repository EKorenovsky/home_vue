class Message {
    constructor(text, direction) {
        this.text = text;
        this.direction = direction;
        this.date = new Date();
    }

    getDateForHtml() {

        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        return this.date.toLocaleString("ru", options);
    }
}


class User {
    constructor(name, img, about) {
        this.name = name;
        this.img = img;
        this.about = about;
        this.messages = [];
        this.status = false;
    }

    addMessage(text, direction) {
        let msg = new Message(text, direction);
        this.messages.push(msg);
    }

    getDate() {
        let dt = new Date();
        let options = {
            day: 'numeric',
            weekday: 'long',
        };
        return dt.toLocaleString("ru", options);
    }
}

function getUsers() {
    return [
        new User("Иван Петров", "https://api.adorable.io/avatars/45/abott1@adorable.png", "Наш ответ соку 'Я' - водка 'Ы'!"),
        new User("Федор Федоров", "https://api.adorable.io/avatars/45/abott2@adorable.png", "Этот чай был нежно отобран на границе с Таджикистаном."),
        new User("Сидор Сидоров", "https://api.adorable.io/avatars/45/abott3@adorable.png", "Вискас для котят со вкусом собаки с детства воспитывает в вашем зверьке чувство колоссальной уверенности в себе!"),
        new User("Сергей Сергеев", "https://api.adorable.io/avatars/45/abott4@adorable.png", "Доместос - убивает все известные микробы наповал, а неизвестные - берёт в плен на изучение."),
        new User("Потап Потапов", "https://api.adorable.io/avatars/45/abott5@adorable.png", "Можно пить пиво по-немецки: с колбасками. Можно по-английски: с чипсами. Можно по-японски: с суши. А я люблю по-русски: с водкой..."),
        new User("Назар Назаров", "https://api.adorable.io/avatars/45/abott6@adorable.png", "Мечты - это то, что помогает нам летать, не вставая с дивана."),
        new User("Петр Петров", "https://api.adorable.io/avatars/45/abott7@adorable.png", "А занимаемся мы тем, что в России называется бизнесом."),
    ];
};

function setRandomMessage(user) {
    axios.get('https://fish-text.ru/get?type=title&number=1').then(response => {
        if (response.data.status == "success") {
            user.addMessage(response.data.text, 0);
            setScrollBottom();
        }
    });

};

function setScrollBottom() {
    /*
    let domDiv = app.$refs["msg-history"];
    setTimeout(() => (domDiv.scrollTop = domDiv.scrollHeight), 50);
    */
}