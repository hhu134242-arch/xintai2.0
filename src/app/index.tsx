import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, radii, spacing } from '@/constants/theme';

const metrics = [
  { label: '待处理订单', value: '08', hint: '需要跟进', tone: 'blue' },
  { label: '待收款', value: '¥26,400', hint: '3 位客户', tone: 'amber' },
] as const;

const actions = ['新建订单', '添加客户', '查看库存'];

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>XINTAI 2.0</Text>
            <Text style={styles.title}>工作台</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>信</Text>
          </View>
        </View>

        <View style={styles.greeting}>
          <Text style={styles.greetingTitle}>今天生意怎么样？</Text>
          <Text style={styles.greetingSubtitle}>把订单、客户和库存放在一个地方。</Text>
        </View>

        <View style={styles.salesCard}>
          <View style={styles.salesHeading}>
            <Text style={styles.salesLabel}>本月销售额</Text>
            <View style={styles.trendBadge}>
              <Text style={styles.trendText}>经营概览</Text>
            </View>
          </View>
          <Text style={styles.salesAmount}>¥ 128,600</Text>
          <Text style={styles.salesFootnote}>演示数据 · 接入业务数据后将在这里更新</Text>
          <View style={styles.salesRule} />
          <View style={styles.salesFooter}>
            <Text style={styles.salesFooterLabel}>本月已完成订单</Text>
            <Text style={styles.salesFooterValue}>32 笔</Text>
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>待办事项</Text>
          <Text style={styles.sectionHint}>今日概览</Text>
        </View>
        <View style={styles.metricRow}>
          {metrics.map((item) => (
            <View key={item.label} style={styles.metricCard}>
              <View style={[styles.metricDot, item.tone === 'amber' && styles.metricDotAmber]} />
              <Text style={styles.metricValue}>{item.value}</Text>
              <Text style={styles.metricLabel}>{item.label}</Text>
              <Text style={styles.metricHint}>{item.hint}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>快捷操作</Text>
        </View>
        <View style={styles.actionRow}>
          {actions.map((action, index) => (
            <View key={action} style={styles.actionItem}>
              <View style={[styles.actionIcon, index === 1 && styles.actionIconAlt]}>
                <Text style={styles.actionSymbol}>{index === 0 ? '+' : index === 1 ? '◎' : '▦'}</Text>
              </View>
              <Text style={styles.actionLabel}>{action}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>最近订单</Text>
          <Text style={styles.sectionHint}>演示信息</Text>
        </View>
        <View style={styles.orderCard}>
          <View style={styles.orderTopRow}>
            <View>
              <Text style={styles.orderNumber}>XT-2026-0341</Text>
              <Text style={styles.orderCustomer}>山城服饰 · 针织衫</Text>
            </View>
            <View style={styles.orderStatus}>
              <Text style={styles.orderStatusText}>待出库</Text>
            </View>
          </View>
          <View style={styles.orderBottomRow}>
            <Text style={styles.orderMeta}>20 件</Text>
            <Text style={styles.orderAmount}>¥ 8,600</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxl,
    paddingTop: spacing.md,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eyebrow: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 4,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.pill,
    borderWidth: 1,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  greeting: {
    marginTop: spacing.xl,
  },
  greetingTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '600',
  },
  greetingSubtitle: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
  },
  salesCard: {
    backgroundColor: '#1B2C4D',
    borderRadius: radii.lg,
    marginTop: spacing.lg,
    padding: spacing.xl,
  },
  salesHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salesLabel: {
    color: '#D8E0F0',
    fontSize: 13,
    fontWeight: '500',
  },
  trendBadge: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
  },
  trendText: {
    color: '#F4F6FA',
    fontSize: 11,
    fontWeight: '600',
  },
  salesAmount: {
    color: '#FFFFFF',
    fontSize: 31,
    fontWeight: '700',
    letterSpacing: -0.6,
    marginTop: spacing.md,
  },
  salesFootnote: {
    color: '#B8C4D8',
    fontSize: 11,
    marginTop: 5,
  },
  salesRule: {
    backgroundColor: 'rgba(255,255,255,0.14)',
    height: 1,
    marginTop: spacing.lg,
  },
  salesFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  salesFooterLabel: {
    color: '#D8E0F0',
    fontSize: 12,
  },
  salesFooterValue: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  sectionHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    marginTop: spacing.xl,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  sectionHint: {
    color: colors.textMuted,
    fontSize: 12,
  },
  metricRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  metricCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flex: 1,
    padding: spacing.lg,
  },
  metricDot: {
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    height: 7,
    marginBottom: spacing.md,
    width: 7,
  },
  metricDotAmber: {
    backgroundColor: colors.warning,
  },
  metricValue: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '700',
  },
  metricLabel: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
  },
  metricHint: {
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 4,
  },
  actionRow: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
    gap: spacing.sm,
  },
  actionIcon: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: radii.md,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  actionIconAlt: {
    backgroundColor: colors.successSoft,
  },
  actionSymbol: {
    color: colors.primary,
    fontSize: 23,
    fontWeight: '500',
    lineHeight: 26,
  },
  actionLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  orderCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    padding: spacing.lg,
  },
  orderTopRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNumber: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
  orderCustomer: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 6,
  },
  orderStatus: {
    backgroundColor: colors.warningSoft,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
  },
  orderStatusText: {
    color: colors.warning,
    fontSize: 11,
    fontWeight: '600',
  },
  orderBottomRow: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    paddingTop: spacing.md,
  },
  orderMeta: {
    color: colors.textMuted,
    fontSize: 12,
  },
  orderAmount: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
});
