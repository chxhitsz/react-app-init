# 常量目录

以模块为粒度进行组织，如`repo.ts`中放置和代码库有关的内容。

每个常量都以`CONSTANT_CASE`的形式命名。枚举也可以放置在此，可以使用TS的枚举。

如果常量仅用于某个组件或容器、API等处，具备对外隔离的性质，则无需放在此处，可以直接在组件、API等的实现中写。
