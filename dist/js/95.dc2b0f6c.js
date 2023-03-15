"use strict";(self["webpackChunkvue2_bsm"]=self["webpackChunkvue2_bsm"]||[]).push([[95],{98095:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"infoList"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"small"}},[t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.addStudent}},[e._v("新增")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),t("el-table-column",{attrs:{prop:"father",label:"父亲",align:"center"}}),t("el-table-column",{attrs:{prop:"mother",label:"母亲",align:"center"}}),t("el-table-column",{attrs:{prop:"address",label:"家庭住址",align:"center"}}),t("el-table-column",{attrs:{prop:"time",label:"入校时间",align:"center"}}),t("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return e.del(a.row)}}}),t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){return e.edit(a.row)}}})]}}])})],1),t("el-dialog",{attrs:{title:e.state?"添加学生信息":"修改学生信息",visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"name"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth,prop:"sex"}},[t("el-radio",{attrs:{label:"1"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("男")]),t("el-radio",{attrs:{label:"2"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女")])],1),t("el-form-item",{attrs:{label:"年龄","label-width":e.formLabelWidth,prop:"age"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"父亲姓名","label-width":e.formLabelWidth,prop:"father"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.father,callback:function(t){e.$set(e.form,"father",t)},expression:"form.father"}})],1),t("el-form-item",{attrs:{label:"母亲姓名","label-width":e.formLabelWidth,prop:"mother"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mother,callback:function(t){e.$set(e.form,"mother",t)},expression:"form.mother"}})],1),t("el-form-item",{attrs:{label:"家庭住址","label-width":e.formLabelWidth,prop:"address"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),t("el-form-item",{attrs:{label:"入校时间","label-width":e.formLabelWidth,prop:"time"}},[t("el-date-picker",{attrs:{align:"right",format:"yyyy年 MM 月 dd 日","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),t("el-form-item",{attrs:{label:"联系方式","label-width":e.formLabelWidth,prop:"phone"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){return e.closeInfo("form")}}},[e._v(" 取 消 ")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure("form")}}},[e._v(" 确 定 ")])],1)],1)],1)},l=[],o=a(10122),s={name:"InfoList",data(){return{tableData:[],dialogFormVisible:!1,form:{name:"",sex:"1",age:"",father:"",mother:"",address:"",time:"",phone:""},state:!0,formLabelWidth:"80px",rules:{name:[{required:!0,message:"请输入姓名"}],sex:[{required:!0}],age:[{required:!0,message:"请输入年龄"}],address:[{required:!0,message:"请输入地址"}],time:[{required:!0}],phone:[{required:!0,message:"请输入联系方式"}]},total:0}},created(){this.getData()},methods:{del(e){this.$alert("确定删除？","提示",{confirmButtonText:"确定",callback:()=>{(0,o.mx)(e.id).then((e=>{200===e.status&&(this.getData(),this.$message({message:e.data.message,type:"success"}))}))}})},edit(e){this.form={...e},this.state=!1,this.dialogFormVisible=!0,this.title="修改学生信息"},closeInfo(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},addStudent(){this.form={name:"",sex:"1",age:"",father:"",mother:"",address:"",time:"",phone:""},this.dialogFormVisible=!0,this.state=!0},getData(){(0,o.C5)().then((e=>{200===e.status&&(this.tableData=e.data.data,this.total=e.data.total)}))},sure(e){this.$refs[e].validate((t=>{t&&(console.log(e,this.form),this.state?(0,o.um)("post",this.form).then((e=>{console.log(e),200===e.status&&(this.getData(),this.dialogFormVisible=!1,this.$message({type:"success",message:e.data.message}))})):(0,o.um)("put",this.form).then((e=>{200===e.status&&(this.getData(),this.dialogFormVisible=!1,this.$message({type:"success",message:e.data.message}))})))}))}}},i=s,n=a(1001),m=(0,n.Z)(i,r,l,!1,null,"16a5293d",null),u=m.exports},10122:function(e,t,a){a.d(t,{C5:function(){return u},Hm:function(){return c},QL:function(){return d},Yd:function(){return n},mx:function(){return f},qH:function(){return i},um:function(){return m},x4:function(){return s}});var r=a(16659),l=a(93069),o=a.n(l);function s(e){return(0,r.Z)({method:"post",url:"/login",data:e})}function i(e){return(0,r.Z)({method:"get",url:"/students",params:e})}function n(e){return(0,r.Z)({method:"delete",url:`/students/${e}`})}function m(e,t){t=o().stringify(t);let a={method:e,url:"/info",data:t};return(0,r.Z)(a)}function u(){return(0,r.Z)({method:"get",url:"/info"})}function f(e){return(0,r.Z)({method:"delete",url:`/info/${e}`})}function d(){return(0,r.Z)({method:"get",url:"dataview"})}function c(){return(0,r.Z)({method:"get",url:"/travel"})}}}]);
//# sourceMappingURL=95.dc2b0f6c.js.map