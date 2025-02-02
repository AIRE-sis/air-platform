"use strict";(()=>{var e={};e.id=908,e.ids=[908],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},249:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,n){return n in r?r[n]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,n)):"function"==typeof r&&"default"===n?r:void 0}}})},457:(e,r,n)=>{n.r(r),n.d(r,{config:()=>d,default:()=>l,routeModule:()=>p});var t={};n.r(t),n.d(t,{default:()=>u});var i=n(802),o=n(153),a=n(249),s=n(329);async function u(e,r){if("POST"!==e.method)return r.status(405).json({error:"Method not allowed"});try{let{email:n,password:t}=e.body,{user:i,token:o}=await s.e.login({email:n,password:t});r.status(200).json({user:i,token:o})}catch(e){r.status(401).json({error:e.message})}}let l=(0,a.l)(t,"default"),d=(0,a.l)(t,"config"),p=new i.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/auth/login",pathname:"/api/auth/login",bundlePath:"",filename:""},userland:t})},329:(e,r,n)=>{n.d(r,{e:()=>f});let t=require("bcryptjs");var i=n.n(t);let o=require("jsonwebtoken");var a=n.n(o);let s=require("mongoose");var u=n.n(s);let l=new(u()).Schema({name:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},role:{type:String,enum:["user","admin"],default:"user"}}),d=u().models.User||u().model("User",l),p=process.env.MONGODB_URI;if(!p)throw Error("Please define the MONGODB_URI environment variable");let c=global.mongoose;async function m(){return c.conn||(c.promise||(c.promise=u().connect(p).then(e=>e)),c.conn=await c.promise),c.conn}c||(c=global.mongoose={conn:null,promise:null});let f={async register({name:e,email:r,password:n,role:t}){if(await m(),await d.findOne({email:r}))throw Error("Email already registered");let o=new d({name:e,email:r,password:await i().hash(n,10),role:t});await o.save();let s=a().sign({userId:o._id},process.env.JWT_SECRET,{expiresIn:"1d"});return{user:o,token:s}},async login({email:e,password:r}){await m();let n=await d.findOne({email:e});if(!n||!await i().compare(r,n.password))throw Error("Invalid email or password");let t=a().sign({userId:n._id},process.env.JWT_SECRET,{expiresIn:"1d"});return{user:n,token:t}}}},153:(e,r)=>{var n;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},802:(e,r,n)=>{e.exports=n(145)}};var r=require("../../../webpack-api-runtime.js");r.C(e);var n=r(r.s=457);module.exports=n})();