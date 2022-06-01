<template>
    <div>
        任务管理 ID = {{id}}
        <el-table :data="tableData" style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default{
        props:['id'],
        name: 'TaskManager',
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
        data() {
            return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
            }
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