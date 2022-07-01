<template slot-scope="scope">
    <div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                <el-input clearable v-model="searchInput" placeholder="仅支持时间（年-月-日）搜索"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" @click="onSearch(searchInput)">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column v-for="(item, rowIndex) in tableTitle" 
            :key="item.title"
            :label= item.title
            width="180">
                <template slot-scope="scope">
                    <div  v-if="false === scope.row[scope.row.length-1]">
                        <span style="margin-left: 10px">{{ scope.row[rowIndex] }}</span>
                    </div>
                    <div  v-else="true === scope.row[scope.row.length-1]">
                        <el-input @change="insertRowFunc(rowIndex, scope.column)" v-model="scope.row[rowIndex]" placeholder="输入任务状态"></el-input>
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
        columnIndex: 1,
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
            tableTitle:[],
            rowNum : 0,
            tableData: [
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

            onSearch: function(){
                console.log('onSearch...searchInput,', this.searchInput);
            },
            
            getData: function(){
                //localStorage.clear()
                let that = this
                this.axios({
                    method:'get',
                    url:'https://4d24d7ef-efac-41d9-a39e-29579744b1a7.mock.pstmn.io/dailymanager/tabletitle',
                }).then(function(repos){
                    that.tableTitle = repos.data;
                    console.log("tableTitle: ", that.tableTitle);
                }).catch(function(error){
                    console.log(error);
                });
                this.axios({
                    method:'get',
                    url:'https://cbabb210-5964-4970-a567-c73ba7d117cb.mock.pstmn.io/dailymanager/tabledata',
                }).then(function(repos){
                    that.tableData = repos.data
                    console.log("that.tableData: ", that.tableData);
                }).catch(function(error){
                    console.log(error);
                });
            },

            sendData: function() {
                let that = this;
                this.axios({
                    method:'post',
                    url: 'https://7f22de3f-dc0e-4763-b83b-6b97ec766df0.mock.pstmn.io/savedata/tabledata',
                    data: that.tableData
                }).then(function(repos){
                    that.tableData = repos.data;
                    console.log("sendData that.tableData: ", that.tableData);
                }).catch(function(error){
                    console.log(error);
                });
            },

            onSubmit: function() {
                console.log('submit...insertInput: ', this.tableData);
                //先去提交一次，然后再获取
                this.sendData();
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
