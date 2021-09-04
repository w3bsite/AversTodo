export const mixin = {
    data() {
        return {
            mail: this.$cookies.get("mail")
        }
    },
    computed: {

        mail: this.$cookies.get("mail")
    }
    ,
    methods: {
        clicked(value) {
            alert(value);
        }
    }

};