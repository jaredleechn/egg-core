'use strict';

// 测试 app.resources 对应 controller 中的多个 action 方法

exports.before = function* () {
  this.body = 'before - ' + this.params.id;
};

exports.after = function* () {
  this.body = 'after - ' + this.params.id;
};

exports.customize = function* () {
  this.body = 'customize - ' + this.params.id;
};

exports.update = function* () {
  this.body = 'update';
}