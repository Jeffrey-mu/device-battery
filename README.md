
# device_battery

- 获取设备电池信息
- 只支持浏览器环境使用

```shell

npm install device_battery

```
```ts
import { device_battery } from 'device_battery'
interface device_battery_data {
  isok: boolean // 获取状态
  level?: string // 电量百分百
  charging?: string // 充电状态
  chargingTime?: string // 完全充电需要的时间
  dischargingTime?: string // 完全放电需要的时间
  description: string // 描述信息
}
console.log(await device_battery)
```

## License

[MIT](./LICENSE) License © 2022 [Jeffrey-mu](https://github.com/Jeffrey-mu)
