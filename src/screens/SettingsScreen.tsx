import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { ArrowLeft, User, Bell, LogOut, UserMinus, Headphones, ChevronRight, Home, Settings as SettingsIcon } from 'lucide-react-native';

export default function SettingsScreen({ navigation }: any) {
  const menuItems = [
    { id: 'profile', title: '내 정보 수정', icon: User, color: '#005dac' },
    { id: 'notif', title: '알림 설정', icon: Bell, color: '#f97316' },
    { id: 'support', title: '고객 센터', icon: Headphones, color: '#0d6c1e' },
  ];

  const dangerItems = [
    { id: 'logout', title: '로그아웃', icon: LogOut, color: '#414752' },
    { id: 'delete', title: '서비스 탈퇴', icon: UserMinus, color: '#ba1a1a' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft color="#005dac" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>설정</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: 'https://picsum.photos/seed/senior/100/100' }} style={styles.avatar} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.userName}>김철수 어르신</Text>
              <Text style={styles.userAge}>80세 · 남성</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>수정</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>일반 설정</Text>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.iconBox, { backgroundColor: item.color + '1A' }]}>
                    <Icon color={item.color} size={20} />
                  </View>
                  <Text style={styles.menuText}>{item.title}</Text>
                </View>
                <ChevronRight color="#c1c6d4" size={20} />
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>계정 관리</Text>
          {dangerItems.map((item) => {
            const Icon = item.icon;
            return (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.iconBox, { backgroundColor: item.color + '1A' }]}>
                    <Icon color={item.color} size={20} />
                  </View>
                  <Text style={[styles.menuText, item.id === 'delete' && { color: '#ba1a1a' }]}>{item.title}</Text>
                </View>
                <ChevronRight color="#c1c6d4" size={20} />
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>버전 정보 1.0.0</Text>
          <Text style={styles.copyrightText}>© 2026 CarePoint. All rights reserved.</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
          <Home color="#717783" size={24} />
          <Text style={styles.navText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <SettingsIcon color="#005dac" size={24} fill="#005dac" />
          <Text style={[styles.navText, { color: '#005dac' }]}>설정</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fb' },
  header: { height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(193, 198, 212, 0.3)' },
  backButton: { padding: 8 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#005dac', marginLeft: 8 },
  content: { flex: 1, padding: 24 },
  profileCard: { backgroundColor: '#ffffff', borderRadius: 32, padding: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, elevation: 2 },
  profileInfo: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { width: 64, height: 64, borderRadius: 32, overflow: 'hidden', marginRight: 16 },
  avatar: { width: '100%', height: '100%' },
  textContainer: { gap: 4 },
  userName: { fontSize: 20, fontWeight: '800', color: '#191c1e' },
  userAge: { fontSize: 14, fontWeight: '600', color: '#717783' },
  editButton: { backgroundColor: '#eceef0', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 16 },
  editButtonText: { fontSize: 14, fontWeight: '700', color: '#414752' },
  section: { marginBottom: 40 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#717783', textTransform: 'uppercase', marginBottom: 16, marginLeft: 8 },
  menuItem: { backgroundColor: '#ffffff', height: 72, borderRadius: 24, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, elevation: 1 },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBox: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  menuText: { fontSize: 16, fontWeight: '700', color: '#191c1e' },
  versionInfo: { alignItems: 'center', paddingVertical: 40, opacity: 0.5 },
  versionText: { fontSize: 13, fontWeight: '600', color: '#717783', marginBottom: 4 },
  copyrightText: { fontSize: 12, color: '#717783' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 96, backgroundColor: 'rgba(255, 255, 255, 0.8)', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 24, borderTopWidth: 1, borderTopColor: 'rgba(193, 198, 212, 0.3)' },
  navItem: { alignItems: 'center', gap: 4 },
  navText: { fontSize: 12, fontWeight: '700', color: '#717783' },
});
