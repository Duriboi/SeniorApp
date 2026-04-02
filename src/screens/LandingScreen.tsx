import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { MessageCircle, ShieldCheck, Headphones, ChevronRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function LandingScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <ShieldCheck color="#ffffff" size={24} />
          </View>
          <Text style={styles.logoText}>CarePoint</Text>
        </View>
      </header>

      <View style={styles.content}>
        <View style={styles.heroImageContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/seed/care/800/600' }} 
            style={styles.heroImage}
          />
          <View style={styles.gradientOverlay} />
        </View>

        <Text style={styles.title}>
          반갑습니다!{"\n"}
          어르신 건강 파트너입니다.
        </Text>
        <Text style={styles.subtitle}>
          편리하고 안전한 건강 관리를 위해{"\n"}
          간편하게 시작해보세요.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.kakaoButton}
          onPress={() => navigation.navigate('ProfileSetup')}
          activeOpacity={0.8}
        >
          <MessageCircle color="rgba(0,0,0,0.8)" size={28} fill="rgba(0,0,0,0.8)" />
          <Text style={styles.kakaoButtonText}>카카오로 3초만에 시작하기</Text>
        </TouchableOpacity>

        <View style={styles.trustBadge}>
          <ShieldCheck color="#0d6c1e" size={18} />
          <Text style={styles.trustBadgeText}>개인정보 보호 시스템 가동 중</Text>
        </View>

        <Text style={styles.helpText}>
          로그인에 어려움이 있으신가요?{"\n"}
          자녀분이나 보호자의 도움을 받으실 수 있습니다.
        </Text>
      </View>

      <TouchableOpacity style={styles.floatingHelp}>
        <View style={styles.floatingHelpContent}>
          <Headphones color="#005dac" size={20} />
          <Text style={styles.floatingHelpText}>도움이 필요하시면 언제든 문의주세요</Text>
        </View>
        <ChevronRight color="#414752" size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
  },
  header: {
    height: 80,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#005dac',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#005dac',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heroImageContainer: {
    width: '100%',
    aspectRatio: 4/3,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 32,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(248, 249, 251, 0.2)',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#191c1e',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#414752',
    textAlign: 'center',
    lineHeight: 26,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    height: 72,
    borderRadius: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  kakaoButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.8)',
    marginLeft: 12,
  },
  trustBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(47, 134, 53, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 16,
  },
  trustBadgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0d6c1e',
    marginLeft: 8,
  },
  helpText: {
    fontSize: 14,
    color: '#414752',
    textAlign: 'center',
    lineHeight: 20,
  },
  floatingHelp: {
    position: 'absolute',
    bottom: 100,
    left: 24,
    right: 24,
    backgroundColor: 'rgba(224, 227, 212, 0.6)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'between',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  floatingHelpContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  floatingHelpText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#191c1e',
    marginLeft: 12,
  },
});
