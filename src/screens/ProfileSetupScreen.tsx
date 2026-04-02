import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { ArrowLeft, Camera, User, Cake, ShieldCheck } from 'lucide-react-native';

export default function ProfileSetupScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft color="#005dac" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Caregiver Connect</Text>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 120 }}>
          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressText}>1/2 단계</Text>
              <Text style={styles.statusText}>프로필 생성 중</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.heroSection}>
            <Text style={styles.title}>어르신의 기초 정보를{"\n"}입력해 주세요</Text>
            <Text style={styles.subtitle}>맞춤형 건강 관리를 위해 꼭 필요한 정보입니다.</Text>
          </View>

          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/senior/200/200' }} 
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.cameraButton}>
                <Camera color="#ffffff" size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.profileInfo}>
              <View style={styles.badgeLine} />
              <Text style={styles.badgeText}>기본 프로필 설정</Text>
              <Text style={styles.badgeDesc}>얼굴이 잘 보이는 사진을 등록하면 보호자가 확인하기 좋습니다.</Text>
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <User color="#005dac" size={20} />
                <Text style={styles.label}>이름</Text>
              </View>
              <TextInput 
                style={styles.input}
                placeholder="성함을 입력하세요"
                placeholderTextColor="#717783"
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <Cake color="#005dac" size={20} />
                <Text style={styles.label}>나이</Text>
              </View>
              <View style={styles.ageInputContainer}>
                <TextInput 
                  style={styles.input}
                  defaultValue="80"
                  keyboardType="numeric"
                />
                <Text style={styles.ageUnit}>세</Text>
              </View>
            </View>

            <View style={styles.infoCard}>
              <View style={styles.infoIconContainer}>
                <ShieldCheck color="#005dac" size={24} />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoTitle}>개인정보 보호 안내</Text>
                <Text style={styles.infoDesc}>
                  입력하신 정보는 보안 서버에 안전하게 저장되며, 어르신의 건강 이상 징후를 감지하는 용도로만 사용됩니다.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => navigation.navigate('ConditionSelection')}
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
    marginBottom: 32,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#005dac',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#414752',
  },
  progressBar: {
    height: 12,
    backgroundColor: 'rgba(236, 238, 240, 1)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '50%',
    backgroundColor: '#005dac',
    borderRadius: 6,
  },
  heroSection: {
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#191c1e',
    lineHeight: 36,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#414752',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#005dac',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 24,
  },
  badgeLine: {
    height: 8,
    width: 40,
    backgroundColor: 'rgba(0, 93, 172, 0.2)',
    borderRadius: 4,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#005dac',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  badgeDesc: {
    fontSize: 13,
    color: '#414752',
    lineHeight: 18,
  },
  form: {
    gap: 32,
  },
  inputGroup: {
    gap: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#191c1e',
  },
  input: {
    backgroundColor: '#eceef0',
    height: 64,
    borderRadius: 32,
    paddingHorizontal: 24,
    fontSize: 18,
    fontWeight: '600',
    color: '#191c1e',
  },
  ageInputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  ageUnit: {
    position: 'absolute',
    right: 24,
    fontSize: 18,
    fontWeight: '700',
    color: '#414752',
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  infoIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 93, 172, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#191c1e',
    marginBottom: 4,
  },
  infoDesc: {
    fontSize: 14,
    color: '#414752',
    lineHeight: 20,
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
  nextButton: {
    backgroundColor: '#005dac',
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#005dac',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
});
