Vue.component('inbox-people', {
    template: `<div class="inbox_people "><slot></slot></div>`
});

Vue.component('users-search', {
    props: ['filter_text', 'cb_modify_filter_text'],
    template: `<div class="headind_srch ">
                <div class="recent_heading ">
                    <h4>Активные</h4>
                </div>
                <div class="srch_bar ">
                    <div class="stylish-input-group ">
                        <input type="text " class="search-bar " placeholder="Поиск " :value="filter_text"  @input="cb_modify_filter_text($event.target.value) ">
                    </div>
                </div>
            </div>`,
});

Vue.component('users-in-chat', {
    template: `<div class="inbox_chat ">
        <slot></slot>
    </div>`,

});

Vue.component('user-in-chat', {
    props: ['user', 'index', 'fn_start_messages'],
    template: `<div @click="fn_start_messages(user) " :class="[{chat_list:true},{active_chat:user.status}] ">
                    <div class="chat_people ">
                        <div class="chat_img "> <img :src="user.img " :alt="user.name "> </div>
                        <div class="chat_ib ">
                            <h5>{{user.name}}&nbsp;<span class="chat_date ">{{user.getDate()}}</span></h5>
                            <p>{{user.about}}</p>
                        </div>
                    </div>
                </div>`,
});


Vue.component('msg-history', {
    template: `<div class="msg_history">
        <slot></slot>
    </div>`,
});


Vue.component('message', {
    props: ['msg', 'active_user'],
    template: `<div v-if="msg.direction==0 " class="incoming_msg ">
                    <div class="incoming_msg_img "> <img :src="active_user.img " :alt="active_user.name "> </div>
                    <div class="received_msg ">
                        <div class="received_withd_msg ">
                            <p>{{msg.text}}
                            </p>
                            <span class="time_date ">{{msg.getDateForHtml()}}</span></div>
                    </div>
                </div>

                <div v-else class="outgoing_msg ">
                    <div class="sent_msg ">
                        <p>{{msg.text}}</p>
                        <span class="time_date ">{{msg.getDateForHtml()}}</span> </div>
                    </div>
                </div>`,
});


Vue.component('add-message', {
    props: ['fn_add_message'],
    data: function() { return { newMessage: '' } },
    template: `<div class="type_msg ">
    <div class="input_msg_write ">
        <input type="text " class="write_msg px-2 " placeholder="Введите сообщение..." v-model="newMessage" v-on:keyup.enter="fn_add_message(newMessage)" />
        <button class="msg_send_btn mx-2 " type="button " @click="fn_add_message(newMessage)"><i class="fa fa-paper-plane-o " aria-hidden="true "></i></button>
    </div>
</div>`,
    created() { eventBus.$on("userchange", () => { this.newMessage = ""; }); }
});