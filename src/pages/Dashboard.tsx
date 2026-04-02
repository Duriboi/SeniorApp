import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  Image, 
  Dimensions, 
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { 
  Bell, Mic, Pill, Activity, Heart, Info, CheckCircle, 
  Undo, Edit, Home, Settings, Sparkles, Utensils,
  HeartPulse, Droplets, Clock
} from 'lucide-react-native';
import { theme } from '../theme';

const { width } = Dimensions.get('window');

export default function Dashboard({ navigation }: any) {
  const [progress] = useState(75);
  const [showVitalsModal, setShowVitalsModal] = useState(false);
  const [showMealModal, setShowMealModal] = useState(false);
  const [showMedModal, setShowMedModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: 'https://picsum.photos/seed/senior/100/100' }} 
              style={styles.profileImage as any}
            />
          </View>
          <Text style={styles.headerTitle}>CarePoint</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Bell color={theme.colors.textSecondary} size={24} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeHeader}>
            <Text style={styles.welcomeTitle}>오늘의 할 일 목록</Text>
            <TouchableOpacity style={styles.aiButton} activeOpacity={0.8}>
              <Mic color="white" size={20} fill="white" />
              <Text style={styles.aiButtonText}>AI 음성 대화</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.welcomeSubtitle}>관리자가 배정된 필수 일정입니다.</Text>
        </View>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.progressLabel}>오늘의 진행률</Text>
              <Text style={styles.progressValue}>{progress}% 완료</Text>
            </View>
            <View style={styles.progressIconContainer}>
              <Activity color={theme.colors.primary} size={32} />
            </View>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
        </View>

        {/* Tasks */}
        <View style={styles.tasksContainer}>
          {/* Task 1: Completed */}
          <View style={[styles.taskCard, styles.completedTaskBorder]}>
            <View style={styles.taskContent}>
              <View style={[styles.taskIconContainer, { backgroundColor: 'rgba(255, 45, 85, 0.1)' }]}>
                <Pill color={theme.colors.tertiary} size={32} />
              </View>
              <View style={styles.taskInfo}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>아침 약 복용</Text>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusBadgeText}>완료</Text>
                  </View>
                </View>
                <Text style={styles.taskTime}>오전 08:30 예정</Text>
                <View style={styles.memoBox}>
                  <Info color={theme.colors.primary} size={16} />
                  <Text style={styles.memoText}>관리자 메모: 식후 30분에 따뜻한 물과 함께 복용하세요.</Text>
                </View>
                <View style={styles.taskActions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Undo color="#FF3B30" size={18} />
                    <Text style={[styles.actionButtonText, { color: '#FF3B30' }]}>취소</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Edit color={theme.colors.textSecondary} size={18} />
                    <Text style={styles.actionButtonText}>수정</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Task 2: Pending */}
          <View style={[styles.taskCard, styles.pendingTaskBorder]}>
            <View style={styles.taskContent}>
              <View style={[styles.taskIconContainer, { backgroundColor: 'rgba(0, 122, 255, 0.1)' }]}>
                <Activity color={theme.colors.primary} size={32} />
              </View>
              <View style={styles.taskInfo}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>가벼운 산책</Text>
                  <View style={[styles.statusBadge, { backgroundColor: '#F2F2F7' }]}>
                    <Text style={[styles.statusBadgeText, { color: theme.colors.textSecondary }]}>대기 중</Text>
                  </View>
                </View>
                <Text style={styles.taskTime}>오전 10:30 예정</Text>
                <View style={styles.memoBox}>
                  <Info color={theme.colors.primary} size={16} />
                  <Text style={styles.memoText}>관리자 메모: 거실에서 15분간 천천히 보행기를 사용하여 걷기.</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.completeTaskButton} activeOpacity={0.9}>
              <CheckCircle color="white" size={24} />
              <Text style={styles.completeTaskButtonText}>완료로 표시</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsGrid}>
          <TouchableOpacity 
            style={styles.quickActionButton}
            onPress={() => setShowVitalsModal(true)}
          >
            <HeartPulse color="#FF3B30" size={40} />
            <Text style={styles.quickActionText}>건강 수치</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.quickActionButton}
            onPress={() => setShowMealModal(true)}
          >
            <Utensils color="#FF9500" size={40} />
            <Text style={styles.quickActionText}>식사 기록</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.quickActionButton, styles.fullWidthAction]}
            onPress={() => setShowMedModal(true)}
          >
            <Clock color="#007AFF" size={40} />
            <Text style={styles.quickActionText}>약 복용 알림 테스트</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerInfo}>
          <Sparkles color="rgba(0, 122, 255, 0.4)" size={48} />
          <Text style={styles.footerInfoText}>
            오늘의 모든 할 일을 완료하면{'\n'}보호자에게 알림이 전송됩니다.
          </Text>
        </View>
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Home color={theme.colors.primary} size={24} fill={theme.colors.primary} />
          <Text style={[styles.tabText, { color: theme.colors.primary }]}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Settings color={theme.colors.textSecondary} size={24} />
          <Text style={styles.tabText}>설정</Text>
        </TouchableOpacity>
      </View>

      {/* Vitals Modal */}
      <Modal
        visible={showVitalsModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowVitalsModal(false)}
      >
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>건강 수치 입력</Text>
            <Text style={styles.modalSubtitle}>현재 상태를 정확하게 입력해주세요.</Text>
            
            <View style={styles.inputGroup}>
              <View style={styles.inputLabelRow}>
                <Heart color={theme.colors.primary} size={24} fill={theme.colors.primary} />
                <Text style={styles.inputLabel}>혈압 (mmHg)</Text>
              </View>
              <View style={styles.inputWrapper}>
                <TextInput 
                  style={styles.modalInput}
                  placeholder="예: 120"
                  keyboardType="numeric"
                />
                <Text style={styles.inputUnit}>mmHg</Text>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabelRow}>
                <Droplets color={theme.colors.tertiary} size={24} fill={theme.colors.tertiary} />
                <Text style={styles.inputLabel}>혈당 (mg/dL)</Text>
              </View>
              <View style={styles.inputWrapper}>
                <TextInput 
                  style={styles.modalInput}
                  placeholder="예: 95"
                  keyboardType="numeric"
                />
                <Text style={styles.inputUnit}>mg/dL</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.modalConfirmButton}
              onPress={() => setShowVitalsModal(false)}
            >
              <Text style={styles.modalConfirmButtonText}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.modalCancelButton}
              onPress={() => setShowVitalsModal(false)}
            >
              <Text style={styles.modalCancelButtonText}>나중에 하기</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </Modal>

      {/* Meal Modal */}
      <Modal
        visible={showMealModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowMealModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconCircle}>
              <Utensils color={theme.colors.primary} size={32} />
            </View>
            <Text style={styles.modalTitle}>식사 내용 입력</Text>
            <Text style={styles.modalSubtitle}>오늘 드신 음식을 간단히 적어주세요.</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>오늘의 식사</Text>
              <TextInput 
                style={[styles.modalInput, styles.textArea]}
                placeholder="예: 된장국과 밥"
                multiline
                numberOfLines={4}
              />
            </View>

            <View style={styles.infoAlert}>
              <Info color={theme.colors.tertiary} size={20} />
              <Text style={styles.infoAlertText}>
                영양 정보를 기록하면 <Text style={{ fontWeight: '700' }}>건강 리포트</Text> 분석이 더 정확해집니다.
              </Text>
            </View>

            <TouchableOpacity 
              style={styles.modalConfirmButton}
              onPress={() => setShowMealModal(false)}
            >
              <CheckCircle color="white" size={24} />
              <Text style={styles.modalConfirmButtonText}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.modalCancelButton}
              onPress={() => setShowMealModal(false)}
            >
              <Text style={styles.modalCancelButtonText}>나중에 하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Medication Modal */}
      <Modal
        visible={showMedModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowMedModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={[styles.modalIconCircle, { backgroundColor: 'rgba(0, 122, 255, 0.1)' }]}>
              <Bell color={theme.colors.primary} size={32} fill={theme.colors.primary} />
            </View>
            <Text style={styles.modalTitle}>약 복용 시간입니다</Text>
            <View style={styles.medCategoryBadge}>
              <Text style={styles.medCategoryText}>고혈압 관리</Text>
            </View>
            
            <View style={styles.medList}>
              <View style={styles.medItem}>
                <Text style={styles.medName}>암로디핀 5mg</Text>
                <Text style={styles.medDose}>1정</Text>
              </View>
              <View style={styles.medItem}>
                <Text style={styles.medName}>멀티비타민 1정</Text>
                <Text style={styles.medDose}>1회</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.modalConfirmButton}
              onPress={() => setShowMedModal(false)}
            >
              <Text style={styles.modalConfirmButtonText}>복용함</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.modalConfirmButton, { backgroundColor: '#F2F2F7' }]}
              onPress={() => setShowMedModal(false)}
            >
              <Text style={[styles.modalConfirmButtonText, { color: theme.colors.textSecondary }]}>안함</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.modalCancelButton}
              onPress={() => setShowMedModal(false)}
            >
              <Text style={styles.modalCancelButtonText}>나중에 다시 알림 (10분 후)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(199, 199, 204, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  profileImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(0, 122, 255, 0.1)',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
  },
  notificationButton: {
    padding: theme.spacing.sm,
    backgroundColor: '#F2F2F7',
    borderRadius: 24,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: '#FF3B30',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'white',
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: 100,
  },
  welcomeSection: {
    marginBottom: theme.spacing.xl,
  },
  welcomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  welcomeTitle: {
    ...theme.typography.h1,
    color: theme.colors.text,
    fontSize: 28,
  },
  aiButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#26C6DA',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: 24,
    gap: theme.spacing.xs,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  aiButtonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 12,
  },
  welcomeSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: 32,
    padding: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(199, 199, 204, 0.2)',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8E8E93',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  progressValue: {
    ...theme.typography.h2,
    color: theme.colors.primary,
  },
  progressIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#F2F2F7',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
  tasksContainer: {
    gap: theme.spacing.xl,
  },
  taskCard: {
    backgroundColor: 'white',
    borderRadius: 32,
    padding: theme.spacing.lg,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  completedTaskBorder: {
    borderLeftWidth: 8,
    borderLeftColor: theme.colors.tertiary,
  },
  pendingTaskBorder: {
    borderLeftWidth: 8,
    borderLeftColor: theme.colors.primary,
  },
  taskContent: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  taskIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskInfo: {
    flex: 1,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.text,
  },
  statusBadge: {
    backgroundColor: theme.colors.tertiary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '800',
  },
  taskTime: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  memoBox: {
    backgroundColor: '#F2F2F7',
    padding: theme.spacing.md,
    borderRadius: 16,
    flexDirection: 'row',
    gap: theme.spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(199, 199, 204, 0.2)',
  },
  memoText: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.textSecondary,
    fontWeight: '700',
    lineHeight: 20,
  },
  taskActions: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(199, 199, 204, 0.3)',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.textSecondary,
  },
  completeTaskButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 18,
    borderRadius: 20,
    marginTop: theme.spacing.lg,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  completeTaskButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
    marginTop: theme.spacing.xl,
  },
  quickActionButton: {
    width: (width - theme.spacing.lg * 2 - theme.spacing.md) / 2,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(199, 199, 204, 0.2)',
  },
  fullWidthAction: {
    width: '100%',
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  footerInfo: {
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 24,
    opacity: 0.7,
  },
  footerInfoText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textSecondary,
    lineHeight: 24,
    marginTop: 16,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(199, 199, 204, 0.3)',
    paddingBottom: 20,
  },
  tabItem: {
    alignItems: 'center',
    gap: 4,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#8E8E93',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: theme.spacing.xl,
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  modalIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  modalTitle: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  inputGroup: {
    width: '100%',
    marginBottom: theme.spacing.lg,
  },
  inputLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  modalInput: {
    width: '100%',
    height: 80,
    backgroundColor: '#F2F2F7',
    borderRadius: 20,
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: '700',
    color: theme.colors.text,
  },
  textArea: {
    height: 120,
    fontSize: 20,
    paddingTop: 20,
    textAlignVertical: 'top',
  },
  inputUnit: {
    position: 'absolute',
    right: 24,
    top: 24,
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.textSecondary,
  },
  infoAlert: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: 'rgba(255, 45, 85, 0.05)',
    padding: 16,
    borderRadius: 20,
    marginBottom: theme.spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 45, 85, 0.1)',
  },
  infoAlertText: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.tertiary,
    lineHeight: 20,
  },
  modalConfirmButton: {
    width: '100%',
    height: 80,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 12,
  },
  modalConfirmButtonText: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
  },
  modalCancelButton: {
    paddingVertical: 12,
  },
  modalCancelButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textSecondary,
    textDecorationLine: 'underline',
  },
  medCategoryBadge: {
    backgroundColor: 'rgba(88, 86, 214, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: theme.spacing.xl,
  },
  medCategoryText: {
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: '700',
  },
  medList: {
    width: '100%',
    backgroundColor: '#F2F2F7',
    borderRadius: 24,
    padding: 24,
    gap: 16,
    marginBottom: theme.spacing.xl,
  },
  medItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(199, 199, 204, 0.3)',
    paddingBottom: 12,
  },
  medName: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
  },
  medDose: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
});
