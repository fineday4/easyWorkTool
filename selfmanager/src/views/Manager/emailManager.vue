<template>
    <div>
        邮件管理 ID = {{id}}
    </div>
</template>
<script>
    export default{
        props:['id'],
        name: 'EmailManager',
        beforeRouteEnter: (to, from, next) => {
            console.log("进入会员列表");
            next(vm=>{
                vm.getData();
            });
        },
        beforeRouteLeave: (to, from, next)=> {
            console.log("离开会员等级页面");
            next();
        },
        methods:{
            getData: function(){
                this.axios({
                    method:'get',
                    url:'https://71aba04f-f1d1-4096-88d6-cf99d771079c.mock.pstmn.io',
                }).then(function(repos){
                    console.log(repos);
                }).catch(function(error){
                    console.log(error);
                });
            }
        }
    }
</script>
<style></style>