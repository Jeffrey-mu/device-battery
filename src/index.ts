export async function device_battery() {
  try {
    // @ts-expect-error
    const { level, charging, chargingTime, dischargingTime } = await navigator.getBattery()
    const battery = {
      isok: true,
      level: `${level * 100}%`,
      charging,
      chargingTime,
      dischargingTime,
      description: 'Level: 电量百分百\n;charging: 充电状态\n;chargingTime: 完全充电需要的时间\n;dischargingTime: 完全放电需要的时间\n',

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
