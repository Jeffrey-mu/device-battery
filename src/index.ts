interface device_battery_data {
  isok: boolean
  level?: string
  charging?: string
  chargingTime?: string
  dischargingTime?: string
  description: string
}
export async function device_battery(): Promise<device_battery_data> {
  try {
    // @ts-expect-error
    const { level, charging, chargingTime, dischargingTime } = await navigator.getBattery()
    const battery = {
      isok: true,
      level: `${level * 100}%`,
      charging,
      chargingTime,
      dischargingTime,
      description: 'Level: 电量百分百;\ncharging: 充电状态;\nchargingTime: 完全充电需要的时间;\ndischargingTime: 完全放电需要的时间;\n',

    }
    return battery
  }
  catch (e) {
    console.log(e)
    return {
      isok: false,
      description: '获取信息失败，可能是浏览器不兼容',
    }
  }
}
export default { device_battery }
