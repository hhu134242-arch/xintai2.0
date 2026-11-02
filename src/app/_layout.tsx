import { NativeTabs } from 'expo-router/native-tabs';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>工作台</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="square.grid.2x2.fill" md="dashboard" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="orders">
          <NativeTabs.Trigger.Label>订单</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="doc.text" md="receipt_long" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="customers">
          <NativeTabs.Trigger.Label>客户</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="person.2" md="group" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="inventory">
          <NativeTabs.Trigger.Label>库存</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="shippingbox" md="inventory_2" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="profile">
          <NativeTabs.Trigger.Label>我的</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="person.crop.circle" md="account_circle" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}
