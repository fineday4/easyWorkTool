<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <el-menu active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i><router-link :to="{name: 'TaskManager', params:{id:4}}">任务管理</router-link></template>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i><router-link :to="{name:'DailyManager', params:{id:2}}">每日工作管理</router-link></template>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-message"></i><router-link :to="{name: 'EmailManager', params:{id:3}}">汇报人管理</router-link></template>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
            <el-header style="text-align: right; font-size: 12px">
            </el-header>        
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
    </div>
</template>
<script>
</script>
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    
    .el-aside {
        color: #333;
    }
</style>
