// 用户名匹配
export function nameRule(rule, value, callback) {
  // 4-8位昵称
  let reg = /^[a-zA-Z0-9]{4,8}$/;
  if (value === "" || value === undefined || value === null) {
    callback(new Error("请输入用户名"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入4-8位昵称"));
  } else {
    callback();
  }
}
// 密码匹配
export function pwdRule(rule, value, callback) {
  // 6-12位密码
  let pwd = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!_.])\S*$/;
  if (value === "" || value === undefined || value === null) {
    callback(new Error("请输入密码"));
  } else if (!pwd.test(value)) {
    callback(new Error("请输入6-12位密码,需要包含大小写字母和数字及特殊符号"));
  } else {
    callback();
  }
}
