import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  Image, 
  Dimensions 
} from 'react-native';
import { 
  Bell, LogOut, UserMinus, 
  Headphones, ChevronRight, Home, Settings as SettingsIcon, User
} from 'lucide-react-native';
import { theme } from '../theme';

const { width } = Dimensions.get('window');

export default function Settings({ navigation }: any) {
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
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.title}>나의 정보 및 설정</Text>
          <Text style={styles.subtitle}>계정 정보 관리 및 앱 설정을 변경할 수 있습니다.</Text>
        </View>

        <View style={styles.menuList}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconContainer, { backgroundColor: 'rgba(0, 122, 255, 0.1)' }]}>
                <User color={theme.colors.primary} size={28} />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>내 정보 수정</Text>
                <Text style={styles.menuItemSubtitle}>이름, 연락처, 건강 상태 변경</Text>
              </View>
            </View>
            <ChevronRight color="rgba(199, 199, 204, 0.8)" size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconContainer, { backgroundColor: 'rgba(88, 86, 214, 0.1)' }]}>
                <Bell color={theme.colors.secondary} size={28} />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>알림 설정</Text>
                <Text style={styles.menuItemSubtitle}>투약 및 일정 알림 방법 설정</Text>
              </View>
            </View>
            <ChevronRight color="rgba(199, 199, 204, 0.8)" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
            <LogOut color={theme.colors.textSecondary} size={24} />
            <Text style={styles.actionCardText}>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#FFF5F5' }]} activeOpacity={0.7}>
            <UserMinus color="#FF3B30" size={24} />
            <Text style={[styles.actionCardText, { color: '#FF3B30' }]}>회원 탈퇴</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.supportCard}>
          <Text style={styles.supportLabel}>도움이 필요하신가요?</Text>
          <TouchableOpacity style={styles.supportButton} activeOpacity={0.9}>
            <Headphones color="white" size={20} />
            <Text style={styles.supportButtonText}>고객센터 연결하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Home color={theme.colors.textSecondary} size={24} />
          <Text style={styles.tabText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <SettingsIcon color={theme.colors.primary} size={24} fill={theme.colors.primary} />
          <Text style={[styles.tabText, { color: theme.colors.primary }]}>설정</Text>
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
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F2F2F7',
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
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: 100,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    fontSize: 28,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    fontWeight: '500',
  },
  menuList: {
    gap: theme.spacing.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: theme.spacing.lg,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(199, 199, 204, 0.2)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.lg,
  },
  menuIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 2,
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    fontWeight: '500',
  },
  actionGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.xl,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    padding: theme.spacing.xl,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
  actionCardText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textSecondary,
  },
  supportCard: {
    marginTop: 48,
    padding: theme.spacing.xl,
    backgroundColor: 'white',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(199, 199, 204, 0.2)',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
  },
  supportLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.lg,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 32,
    gap: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  supportButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
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
});
