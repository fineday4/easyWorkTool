<template slot-scope="scope">
    <div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                <el-input clearable v-model="searchInput" placeholder="输入关键字搜索"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch(searchInput)">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column v-for="(item, index) in tableTitle" 
            :key="item.title"
            :label= item.title

            width="180">
                <template slot-scope="scope">
                    <div  v-if="false === scope.row[scope.row.length-1]">
                        <span style="margin-left: 10px">{{ scope.row[index] }}</span>
                    </div>
                    <div  v-else="true === scope.row[scope.row.length-1]">
                        <el-input @change="insertRowFunc(index, scope.$column)" v-model="tableData[index]" placeholder="输入任务状态"></el-input>
                    </div>
                </template>
            </el-table-column>
            <el-table-column lable="操作" align="right">
               <template slot-scope="scope">
                    <el-button class="el-icon-minus" v-show="true === scope.row[scope.row.length-1]" @click="delData(scope.$index)"></el-button>
                    <el-button class="el-icon-plus" @click="addRow(scope.$index, scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div align="center" style="height:20px">
        </div>
        <div align="center">
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'DailyManager',
        props:['id'],
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
            searchInput: '',
            insertInput: [],
            rowNum : 0,
            tableTitle:[
                {title:'日期'},
                {title:'项目编号'},
                {title:'任务编号'},
                {title:'当前状态'},
                {title:'今日进展'},
                {title:'剩余工作量'}
            ],
            tableData: [
                [
                    '2016-05-01',
                    'ERR12122323',
                    'RWID000001111',
                    'Doing',
                    '完成了XXX',
                    '还有YYY没有做',
                    false,
                ],
                [
                    '2016-05-02',
                    'ERR12122323',
                    'RWID000001111',
                    'Doing',
                    '完成了XXX',
                    '还有YYY没有做',
                    false,
                ],
                [
                    '2016-05-03',
                    'ERR12122323',
                    'RWID000001111',
                    'Doing',
                    '完成了XXX',
                    '还有YYY没有做',
                    false,
                ],
                [
                    '2016-05-04',
                    'ERR12122323',
                    'RWID000001111',
                    'Doing',
                    '完成了XXX',
                    '还有YYY没有做',
                    false,
                ]
            ]
        }
        },
        methods:{
            insertRowFunc: function(row, column) {
                console.log('##insertRowFunc: ', row, column)
            },

            isShow: function(){
                return false;
            },
            onSubmit: function() {
                console.log('submit...insertInput: ', this.insertInput);
            },

            onSearch: function(){
                console.log('onSearch...searchInput,', this.searchInput);
            },
            
            getData: function(){
                this.axios({
                    method:'get',
                    url:'https://71aba04f-f1d1-4096-88d6-cf99d771079c.mock.pstmn.io',
                }).then(function(repos){
                    console.log(repos);
                }).catch(function(error){
                    console.log(error);
                });
            },
            addRow(index, row) {        
                var list = 
                [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    true,
                ];
                this.tableData.splice(index, 0, list);
                console.log(index, this.tableData);
                this.rowNum += 1;
            },
            delData(index) {
                console.log('delData: ', index);
                this.tableData.splice(index, 1)
                this.rowNum -= 1;
            }
        }
    }
</script>
<style></style>
