import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { ArrowLeft, Activity, Pill, Heart, MoreHorizontal, Info, CheckCircle } from 'lucide-react-native';

const conditions = [
  { id: 'bp', name: '고혈압', icon: Activity, color: 'rgba(0, 95, 175, 0.1)', textColor: '#005faf' },
  { id: 'diabetes', name: '당뇨', icon: Pill, color: 'rgba(72, 98, 110, 0.1)', textColor: '#48626e' },
  { id: 'heart', name: '심장 질환', icon: Heart, color: 'rgba(186, 26, 26, 0.1)', textColor: '#ba1a1a' },
  { id: 'other', name: '기타', icon: MoreHorizontal, color: 'rgba(230, 232, 234, 1)', textColor: '#414752' },
];

export default function ConditionSelectionScreen({ navigation }: any) {
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
          <ArrowLeft color="#005dac" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Caregiver Connect</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.progressContainer}>
          <View style={styles.progressDots}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
          </View>
          <Text style={styles.progressText}>2/2 단계</Text>
        </View>

        <View style={styles.heroSection}>
          <Text style={styles.title}>현재 앓고 계신 증상을{"\n"}선택해 주세요</Text>
          <Text style={styles.subtitle}>맞춤형 케어 계획을 위해 정확한 정보를 선택해 주세요.</Text>
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
                  isSelected && styles.selectedCard
                ]}
              >
                {isSelected && (
                  <View style={styles.checkIcon}>
                    <CheckCircle color="#1976d2" size={24} fill="#1976d2" />
                  </View>
                )}
                <View style={[styles.iconContainer, { backgroundColor: condition.color }]}>
                  <Icon color={condition.textColor} size={40} />
                </View>
                <Text style={styles.cardText}>{condition.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.infoCard}>
          <Info color="#005dac" size={20} />
          <Text style={styles.infoText}>
            선택하신 질환 정보는 건강 관리 AI 비서의 추천 로직에만 사용되며, 언제든지 마이페이지에서 수정 가능합니다.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.completeButton}
          onPress={() => navigation.navigate('Dashboard')}
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
    backgroundColor: '#f8f9fb',
  },
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(193, 198, 212, 0.3)',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#005dac',
    marginLeft: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  progressContainer: {
    marginTop: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
  progressDots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  dot: {
    width: 48,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(193, 198, 212, 0.3)',
  },
  activeDot: {
    backgroundColor: '#1976d2',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#005dac',
    letterSpacing: 0.5,
  },
  heroSection: {
    marginBottom: 48,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#191c1e',
    lineHeight: 34,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#414752',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  card: {
    width: '47.5%',
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 32,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(193, 198, 212, 0.2)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#1976d2',
  },
  checkIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#191c1e',
  },
  infoCard: {
    marginTop: 40,
    backgroundColor: '#eceef0',
    padding: 20,
    borderRadius: 24,
    flexDirection: 'row',
    gap: 16,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: '#414752',
    lineHeight: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(193, 198, 212, 0.3)',
  },
  completeButton: {
    backgroundColor: '#005dac',
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#005dac',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  completeButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
});
