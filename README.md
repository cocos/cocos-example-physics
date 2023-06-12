# 物理测试例

- 2d 文件夹对应的是 2D 物理工程
  - box2d : box2d 2D 物理模块专用测试工程（工程配置中的 2D 物理模块已经设置为 box2d，不需要更改）
  - common : builtin 和 box2d 物理模块都需要测试的工程（工程配置中的 2D 物理模块默认为 builtin）

- 3d 文件夹里面对应的是 3D 物理工程
  - cases：功能测试
  - common：公共资源
  - demo：案例演示
  - experiment：一些实验性功能
  - misc：一些不重要的文件
  - resources：动态资源文件夹（common/ 表示是公共动态资源；simple-car/ 表示是动态资源但是只为 simple-car 服务）
  - TestList.scene：测试所有 case 和 demo 的场景，是默认打开的场景，但是可以在设置项 Project/Project Setting/Project Preview 中更改预览启动场景

# Sample project for physics

- The 2d folder corresponds to the 2D physics project
  - box2d: the box2d 2D physics module dedicated test projects (the 2D physics module in the project configuration has been set to box2d and does not need to be changed)
  - common: the projects that both the builtin and box2d physics modules need to test (the 2D physics module in the project configuration is set to builtin by default)

- The 3d folder corresponds to the 3D physics project
  - cases: functional testing
  - common: common resources
  - demo: case demonstration
  - experiment: some experiment feature
  - misc: some files that unimportant
  - resources: dynamic resources folder(common/ mean it is a common dynamic resource; simple-car/ mean it is a dynamic resource but just for simple-car)
  - TestList.scene: a scene for test all case and demo, it is the default open scene but you can change the preview start scene in the setup item Project/Project Setting/Project Preview
