import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal, TextInput, Dimensions } from 'react-native';
import { Bell, Mic, Pill, Activity, Heart, Info, CheckCircle, Undo, Edit, Home, Settings, Sparkles, Utensils, HeartPulse, Droplets, Clock } from 'lucide-react-native';

export default function DashboardScreen({ navigation }: any) {
  const [progress] = useState(75);
  const [showVitalsModal, setShowVitalsModal] = useState(false);
  const [showMealModal, setShowMealModal] = useState(false);
  const [showMedModal, setShowMedModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.profileAvatar}>
            <Image source={{ uri: 'https://picsum.photos/seed/senior/100/100' }} style={styles.avatarImage} />
          </View>
          <Text style={styles.logoText}>CarePoint</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Bell color="#414752" size={24} />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.dashboardHeader}>
          <View style={styles.titleRow}>
            <Text style={styles.dashboardTitle}>오늘의 할 일 목록</Text>
            <TouchableOpacity style={styles.aiButton}>
              <Mic color="#ffffff" size={20} fill="#ffffff" />
              <Text style={styles.aiButtonText}>AI 음성 대화</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.dashboardSubtitle}>관리자가 배정된 필수 일정입니다.</Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressInfo}>
            <View>
              <Text style={styles.progressLabel}>오늘의 진행률</Text>
              <Text style={styles.progressValue}>{progress}% 완료</Text>
            </View>
            <View style={styles.progressCircle}><Activity color="#005dac" size={32} /></View>
          </View>
          <View style={styles.progressTrack}>
            {[1, 2, 3].map(i => <View key={i} style={styles.progressStep} />)}
            <View style={[styles.progressStep, styles.emptyStep]} />
          </View>
        </View>

        <View style={styles.taskList}>
          <View style={[styles.taskCard, styles.completedTask]}>
            <View style={styles.taskIconContainer}>
              <View style={[styles.taskIcon, { backgroundColor: 'rgba(13, 108, 30, 0.1)' }]}><Pill color="#0d6c1e" size={32} /></View>
              <View style={styles.taskContent}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>아침 약 복용</Text>
                  <View style={styles.completedBadge}><Text style={styles.completedBadgeText}>완료</Text></View>
                </View>
                <Text style={styles.taskTime}>오전 08:30 예정</Text>
                <View style={styles.memoBox}>
                  <Info color="#005dac" size={18} />
                  <Text style={styles.memoText}>관리자 메모: 식후 30분에 따뜻한 물과 함께 복용하세요.</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.taskCard, styles.pendingTask]}>
            <View style={styles.taskIconContainer}>
              <View style={[styles.taskIcon, { backgroundColor: 'rgba(0, 93, 172, 0.1)' }]}><Activity color="#005dac" size={32} /></View>
              <View style={styles.taskContent}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>가벼운 산책</Text>
                  <View style={styles.pendingBadge}><Text style={styles.pendingBadgeText}>대기 중</Text></View>
                </View>
                <Text style={styles.taskTime}>오전 10:30 예정</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.completeTaskButton}>
              <CheckCircle color="#ffffff" size={24} />
              <Text style={styles.completeTaskButtonText}>완료로 표시</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => setShowVitalsModal(true)}>
              <HeartPulse color="#ba1a1a" size={40} /><Text style={styles.quickActionText}>건강 수치</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => setShowMealModal(true)}>
              <Utensils color="#f97316" size={40} /><Text style={styles.quickActionText}>식사 기록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickActionButton, { width: '100%' }]} onPress={() => setShowMedModal(true)}>
              <Clock color="#3b82f6" size={40} /><Text style={styles.quickActionText}>약 복용 알림 테스트</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}><Home color="#005dac" size={24} fill="#005dac" /><Text style={[styles.navText, { color: '#005dac' }]}>홈</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}><Settings color="#717783" size={24} /><Text style={styles.navText}>설정</Text></TouchableOpacity>
      </View>

      {/* Modals (Vitals, Meal, Med) - Simplified for brevity */}
      <Modal visible={showVitalsModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>건강 수치 입력</Text>
            <TouchableOpacity style={styles.modalConfirmButton} onPress={() => setShowVitalsModal(false)}><Text style={styles.modalConfirmButtonText}>확인</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fb' },
  header: { height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, borderBottomWidth: 1, borderBottomColor: 'rgba(193, 198, 212, 0.3)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  profileAvatar: { width: 48, height: 48, borderRadius: 24, overflow: 'hidden', marginRight: 16 },
  avatarImage: { width: '100%', height: '100%' },
  logoText: { fontSize: 24, fontWeight: '800', color: '#005dac' },
  notificationButton: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#eceef0', justifyContent: 'center', alignItems: 'center' },
  notificationDot: { position: 'absolute', top: 12, right: 12, width: 8, height: 8, borderRadius: 4, backgroundColor: '#ef4444', borderWidth: 2, borderColor: '#ffffff' },
  content: { flex: 1, paddingHorizontal: 24 },
  dashboardHeader: { marginTop: 24, marginBottom: 40 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  dashboardTitle: { fontSize: 30, fontWeight: '800', color: '#191c1e', flex: 1 },
  aiButton: { backgroundColor: '#26C6DA', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 },
  aiButtonText: { fontSize: 14, fontWeight: '800', color: '#ffffff', marginLeft: 8 },
  dashboardSubtitle: { fontSize: 18, fontWeight: '600', color: '#414752' },
  progressCard: { backgroundColor: '#ffffff', borderRadius: 32, padding: 28, marginBottom: 40, elevation: 4, shadowOpacity: 0.1, shadowRadius: 12 },
  progressInfo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  progressLabel: { fontSize: 14, fontWeight: '700', color: '#717783', textTransform: 'uppercase' },
  progressValue: { fontSize: 30, fontWeight: '800', color: '#005dac' },
  progressCircle: { width: 80, height: 80, borderRadius: 40, borderWidth: 4, borderColor: '#eceef0', justifyContent: 'center', alignItems: 'center' },
  progressTrack: { flexDirection: 'row', gap: 12 },
  progressStep: { flex: 1, height: 10, backgroundColor: '#005dac', borderRadius: 5 },
  emptyStep: { backgroundColor: '#eceef0' },
  taskList: { gap: 32 },
  taskCard: { backgroundColor: '#ffffff', borderRadius: 32, padding: 24, elevation: 4, borderLeftWidth: 8 },
  completedTask: { borderLeftColor: '#0d6c1e' },
  pendingTask: { borderLeftColor: '#005dac' },
  taskIconContainer: { flexDirection: 'row', gap: 20 },
  taskIcon: { width: 64, height: 64, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  taskContent: { flex: 1 },
  taskHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  taskTitle: { fontSize: 24, fontWeight: '800', color: '#191c1e' },
  completedBadge: { backgroundColor: '#0d6c1e', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16 },
  completedBadgeText: { fontSize: 12, fontWeight: '700', color: '#ffffff' },
  pendingBadge: { backgroundColor: '#eceef0', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16 },
  pendingBadgeText: { fontSize: 12, fontWeight: '700', color: '#414752' },
  taskTime: { fontSize: 18, fontWeight: '700', color: '#414752', marginBottom: 16 },
  memoBox: { backgroundColor: '#f2f4f6', padding: 16, borderRadius: 16, flexDirection: 'row', gap: 12 },
  memoText: { flex: 1, fontSize: 14, fontWeight: '700', color: '#414752' },
  completeTaskButton: { backgroundColor: '#005dac', height: 64, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 20 },
  completeTaskButtonText: { fontSize: 18, fontWeight: '800', color: '#ffffff' },
  quickActions: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  quickActionButton: { width: '47.5%', backgroundColor: '#ffffff', padding: 24, borderRadius: 32, alignItems: 'center', justifyContent: 'center', gap: 12, elevation: 4 },
  quickActionText: { fontSize: 16, fontWeight: '700', color: '#191c1e' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 96, backgroundColor: 'rgba(255, 255, 255, 0.8)', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 24, borderTopWidth: 1, borderTopColor: 'rgba(193, 198, 212, 0.3)' },
  navItem: { alignItems: 'center', gap: 4 },
  navText: { fontSize: 12, fontWeight: '700', color: '#717783' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', justifyContent: 'center', alignItems: 'center', padding: 24 },
  modalCard: { width: '100%', backgroundColor: '#ffffff', borderRadius: 40, padding: 32, alignItems: 'center' },
  modalTitle: { fontSize: 30, fontWeight: '800', color: '#001c3a', marginBottom: 32 },
  modalConfirmButton: { width: '100%', backgroundColor: '#005dac', height: 80, borderRadius: 24, justifyContent: 'center', alignItems: 'center' },
  modalConfirmButtonText: { fontSize: 24, fontWeight: '800', color: '#ffffff' },
});
