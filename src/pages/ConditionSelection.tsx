import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { ArrowLeft, Activity, Pill, Heart, MoreHorizontal, Info, CheckCircle } from 'lucide-react-native';
import { theme } from '../theme';

const { width } = Dimensions.get('window');

const conditions = [
  { id: 'bp', name: '고혈압', icon: Activity, color: 'rgba(0, 122, 255, 0.1)', iconColor: theme.colors.primary },
  { id: 'diabetes', name: '당뇨', icon: Pill, color: 'rgba(88, 86, 214, 0.1)', iconColor: theme.colors.secondary },
  { id: 'heart', name: '심장 질환', icon: Heart, color: 'rgba(255, 45, 85, 0.1)', iconColor: theme.colors.tertiary },
  { id: 'other', name: '기타', icon: MoreHorizontal, color: 'rgba(142, 142, 147, 0.1)', iconColor: theme.colors.textSecondary },
];

export default function ConditionSelection({ navigation }: any) {
  const [selected, setSelected] = useState<string[]>(['bp']);

  const toggleCondition = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft color={theme.colors.primary} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Caregiver Connect</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.stepIndicator}>
          <View style={styles.stepDots}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
          </View>
          <Text style={styles.stepText}>2/2 단계</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>
            현재 앓고 계신 증상을{'\n'}선택해 주세요
          </Text>
          <Text style={styles.subtitle}>
            맞춤형 케어 계획을 위해 정확한 정보를 선택해 주세요.
          </Text>
        </View>

        <View style={styles.grid}>
          {conditions.map((condition) => {
            const isSelected = selected.includes(condition.id);
            const Icon = condition.icon;
            return (
              <TouchableOpacity
                key={condition.id}
                onPress={() => toggleCondition(condition.id)}
                activeOpacity={0.8}
                style={[
                  styles.card,
                  isSelected ? styles.selectedCard : styles.unselectedCard
                ]}
              >
                {isSelected && (
                  <View style={styles.checkIcon}>
                    <CheckCircle color={theme.colors.primary} size={24} fill="white" />
                  </View>
                )}
                <View style={[styles.iconContainer, { backgroundColor: condition.color }]}>
                  <Icon color={condition.iconColor} size={40} />
                </View>
                <Text style={styles.cardText}>{condition.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.infoBox}>
          <Info color={theme.colors.primary} size={20} />
          <Text style={styles.infoBoxText}>
            선택하신 질환 정보는 건강 관리 AI 비서의 추천 로직에만 사용되며, 언제든지 마이페이지에서 수정 가능합니다.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.completeButton}
          onPress={() => navigation.navigate('Dashboard')}
          activeOpacity={0.9}
        >
          <Text style={styles.completeButtonText}>설정 완료하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(199, 199, 204, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  backButton: {
    padding: theme.spacing.sm,
    borderRadius: 20,
  },
  headerTitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginLeft: theme.spacing.md,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: 120,
  },
  stepIndicator: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  stepDots: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  dot: {
    height: 8,
    width: 48,
    borderRadius: 4,
    backgroundColor: 'rgba(199, 199, 204, 0.3)',
  },
  activeDot: {
    backgroundColor: theme.colors.primary,
  },
  stepText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.primary,
    letterSpacing: 1,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  card: {
    width: (width - theme.spacing.lg * 2 - theme.spacing.md) / 2,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
    position: 'relative',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  unselectedCard: {
    borderWidth: 1,
    borderColor: 'rgba(199, 199, 204, 0.2)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  checkIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
  infoBox: {
    marginTop: theme.spacing.xl,
    padding: theme.spacing.lg,
    backgroundColor: '#F2F2F7',
    borderRadius: 24,
    flexDirection: 'row',
    gap: theme.spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(199, 199, 204, 0.2)',
  },
  infoBoxText: {
    flex: 1,
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: 40,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(199, 199, 204, 0.3)',
  },
  completeButton: {
    backgroundColor: theme.colors.primary,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  completeButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});
