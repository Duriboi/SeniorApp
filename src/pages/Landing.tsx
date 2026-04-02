import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { MessageCircle, ShieldCheck, Headphones, ChevronRight } from 'lucide-react-native';
import { theme } from '../theme';

const { width } = Dimensions.get('window');

export default function Landing({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <ShieldCheck color="white" size={24} />
          </View>
          <Text style={styles.logoText}>CarePoint</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <Image 
            source={{ uri: 'https://picsum.photos/seed/care/800/600' }} 
            style={styles.image as any}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay} />
        </View>

        <Text style={styles.title}>
          반갑습니다!{'\n'}
          어르신 건강 파트너입니다.
        </Text>
        <Text style={styles.subtitle}>
          편리하고 안전한 건강 관리를 위해{'\n'}
          간편하게 시작해보세요.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.kakaoButton}
          onPress={() => navigation.navigate('Setup')}
          activeOpacity={0.8}
        >
          <MessageCircle color="rgba(0,0,0,0.8)" size={32} fill="rgba(0,0,0,0.8)" />
          <Text style={styles.kakaoButtonText}>카카오로 3초만에 시작하기</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <View style={styles.badge}>
            <ShieldCheck color={theme.colors.tertiary} size={20} />
            <Text style={styles.badgeText}>개인정보 보호 시스템 가동 중</Text>
          </View>
          <Text style={styles.infoText}>
            로그인에 어려움이 있으신가요?{'\n'}
            자녀분이나 보호자의 도움을 받으실 수 있습니다.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.helpBar} activeOpacity={0.9}>
        <View style={styles.helpContent}>
          <Headphones color={theme.colors.primary} size={20} />
          <Text style={styles.helpText}>도움이 필요하시면 언제든 문의주세요</Text>
        </View>
        <ChevronRight color={theme.colors.textSecondary} size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing.xl,
    height: 80,
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
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  logoText: {
    ...theme.typography.h2,
    color: theme.colors.primary,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: theme.spacing.xl,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(242, 242, 247, 0.3)',
  },
  title: {
    ...theme.typography.h1,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
    lineHeight: 40,
  },
  subtitle: {
    ...theme.typography.bodyBold,
    textAlign: 'center',
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: 100,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    height: 80,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  kakaoButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.8)',
    marginLeft: theme.spacing.md,
  },
  infoContainer: {
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 45, 85, 0.05)',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: 20,
    marginBottom: theme.spacing.md,
  },
  badgeText: {
    color: theme.colors.tertiary,
    fontWeight: '700',
    fontSize: 14,
    marginLeft: theme.spacing.xs,
  },
  infoText: {
    ...theme.typography.caption,
    textAlign: 'center',
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  helpBar: {
    position: 'absolute',
    bottom: 30,
    left: '5%',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 40,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  helpContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  helpText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginLeft: theme.spacing.md,
  },
});
