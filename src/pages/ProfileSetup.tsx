import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { ArrowLeft, Camera, User, Cake, ShieldCheck } from 'lucide-react-native';
import { theme } from '../theme';

export default function ProfileSetup({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft color={theme.colors.primary} size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Caregiver Connect</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.stepIndicator}>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepText}>1/2 단계</Text>
              <Text style={styles.stepSubtext}>프로필 생성 중</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>
              어르신의 기초 정보를{'\n'}입력해 주세요
            </Text>
            <Text style={styles.subtitle}>
              맞춤형 건강 관리를 위해 꼭 필요한 정보입니다.
            </Text>
          </View>

          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/senior/200/200' }} 
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.cameraOverlay} activeOpacity={0.7}>
                <Camera color="white" size={32} />
              </TouchableOpacity>
            </View>
            <View style={styles.avatarInfo}>
              <View style={styles.avatarBadge} />
              <Text style={styles.avatarLabel}>기본 프로필 설정</Text>
              <Text style={styles.avatarHint}>얼굴이 잘 보이는 사진을 등록하면 보호자가 확인하기 좋습니다.</Text>
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <User color={theme.colors.primary} size={20} />
                <Text style={styles.label}>이름</Text>
              </View>
              <TextInput 
                placeholder="성함을 입력하세요"
                placeholderTextColor={theme.colors.outline}
                style={styles.input}
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <Cake color={theme.colors.primary} size={20} />
                <Text style={styles.label}>나이</Text>
              </View>
              <View style={styles.ageInputContainer}>
                <TextInput 
                  defaultValue="80"
                  keyboardType="number-pad"
                  style={styles.ageInput}
                />
                <Text style={styles.ageUnit}>세</Text>
              </View>
            </View>

            <View style={styles.infoCard}>
              <View style={styles.infoIconContainer}>
                <ShieldCheck color={theme.colors.primary} size={24} />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoCardTitle}>개인정보 보호 안내</Text>
                <Text style={styles.infoCardText}>
                  입력하신 정보는 보안 서버에 안전하게 저장되며, 어르신의 건강 이상 징후를 감지하는 용도로만 사용됩니다.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => navigation.navigate('Conditions')}
            activeOpacity={0.9}
          >
            <Text style={styles.nextButtonText}>다음으로 넘어가기</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    marginBottom: theme.spacing.xl,
  },
  stepTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  stepText: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  stepSubtext: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  progressBar: {
    height: 12,
    backgroundColor: 'rgba(199, 199, 204, 0.3)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '50%',
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    lineHeight: 40,
  },
  subtitle: {
    ...theme.typography.bodyBold,
    color: theme.colors.textSecondary,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E5E5EA',
    borderWidth: 4,
    borderColor: 'white',
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  cameraOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInfo: {
    flex: 1,
    marginLeft: theme.spacing.lg,
  },
  avatarBadge: {
    height: 8,
    width: 64,
    backgroundColor: 'rgba(0, 122, 255, 0.2)',
    borderRadius: 4,
    marginBottom: theme.spacing.xs,
  },
  avatarLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: theme.spacing.xs,
  },
  avatarHint: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  form: {
    gap: theme.spacing.xl,
  },
  inputGroup: {
    gap: theme.spacing.sm,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
  input: {
    backgroundColor: '#F2F2F7',
    height: 64,
    borderRadius: 32,
    paddingHorizontal: theme.spacing.lg,
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.text,
  },
  ageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    height: 64,
    borderRadius: 32,
    paddingHorizontal: theme.spacing.lg,
  },
  ageInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.text,
  },
  ageUnit: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.textSecondary,
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 24,
    padding: theme.spacing.lg,
    flexDirection: 'row',
    gap: theme.spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  infoIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTextContainer: {
    flex: 1,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 4,
  },
  infoCardText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
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
  nextButton: {
    backgroundColor: theme.colors.primary,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});
