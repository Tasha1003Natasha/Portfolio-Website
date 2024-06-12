"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[424],{424:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return b}});var i=r(152),s=r(791),c={_origin:"https://api.emailjs.com"},l=function(e,t,r){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var m=d((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"})),p=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,a){var o=new XMLHttpRequest;o.addEventListener("load",(function(e){var t=e.target,r=new m(t);200===r.status||"OK"===r.text?n(r):a(r)})),o.addEventListener("error",(function(e){var t=e.target;a(new m(t))})),o.open("POST",c._origin+e,!0),Object.keys(r).forEach((function(e){o.setRequestHeader(e,r[e])})),o.send(t)}))},f=function(e,t,r,n){var a=n||c._userID;l(a,e,t);var o={lib_version:"3.12.1",user_id:a,service_id:e,template_id:t,template_params:r};return p("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},_=r(184),b=function(){var e=(0,s.useState)({user_name:"",user_email:"",message:""}),t=(0,i.Z)(e,2),r=t[0],a=t[1],c=(0,s.useState)(!1),l=(0,i.Z)(c,2),u=l[0],d=l[1],m=function(e){a(o(o({},r),{},n({},e.target.name,e.target.value)))};return(0,_.jsx)("div",{name:"contact",className:"w-full h-screen md:px-4 px-8 flex justify-center items-center  bg-[#adbbc5] text-[#000080] dark:bg-[#0d1c2c] dark:text-[#0d1c2c]",children:(0,_.jsxs)("form",{onSubmit:function(e){console.log({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),e.preventDefault(),f({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NEXT_PUBLIC_SERVICE_ID,{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NEXT_PUBLIC_TEMPLATE_ID,"service_d6bwsu8","template_3vs9u82",r,{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NEXT_PUBLIC_PUBLIC_KEY).then((function(e){console.log("SUCCESS!",e.status,e.text),d(!0)})).catch((function(e){console.log("FAILED...",e)})),a({user_name:"",user_email:"",message:""})},className:"text-base flex flex-col sm:max-w-[600px] w-full",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:"text-base sm:text-2xl md:text-3xl font-bold inline border-b-4 text-[#000080] dark:text-gray-300 border-[#fffd88]  dark:border-yellow-300",children:"Contact"}),(0,_.jsx)("p",{className:"text-sm sm:text-base lg:text-lg text-white dark:text-gray-300 lg:py-4 py-2 cursor-pointer",children:"Submit the form below or shoot me an email: 0955712824n@gmail.com"})]}),(0,_.jsx)("input",{className:"bg-[#ccd6f6] p-2 outline-none",type:"text",placeholder:"Name",name:"user_name",value:r.user_name,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,_.jsx)("input",{className:"lg:my-4 p-2 my-2 bg-[#ccd6f6] outline-none",type:"email",placeholder:"Email",name:"user_email",value:r.user_email,onChange:m,pattern:"^\\S+@\\S+\\.\\S+$",required:!0}),(0,_.jsx)("textarea",{className:"bg-[#ccd6f6] p-2 outline-none",name:"message",rows:"6",placeholder:"Message",value:r.message,onChange:m}),(0,_.jsx)("button",{type:"submit",value:"Send",className:"text-sm md:text-lg lg:px-4 lg:py-2 lg:my-4 my-2 px-2 text-[#0a192f] bg-[#ccd6f6] border-2 hover:bg-[#fffd88] hover:border-bg-[#fffd88] dark:hover:bg-yellow-300 dark:hover:border-yellow-300  mx-auto flex items-center",children:"Let's Collaborate"}),(0,_.jsx)("span",{className:"text-gray-300 cursor-pointer flex  justify-center items-center ",children:u&&"Thank you for contacting me!"})]})})}}}]);
//# sourceMappingURL=424.d2d08caf.chunk.js.map