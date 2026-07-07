import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BaseToastProps } from 'react-native-toast-message';
import { Colors, Typography, Spacing } from '@theme';

const ToastLayout = ({
    text1,
    text2,
    borderColor,
}: BaseToastProps & { borderColor: string }) => (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
        {!!text1 && <Text style={styles.title}>{text1}</Text>}
        {!!text2 && <Text style={styles.message}>{text2}</Text>}
    </View>
);

export const toastConfig = {
    error: (props: BaseToastProps) => <ToastLayout {...props} borderColor={Colors.error} />,
    success: (props: BaseToastProps) => <ToastLayout {...props} borderColor={Colors.success} />,
    info: (props: BaseToastProps) => <ToastLayout {...props} borderColor={Colors.warning} />,
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: Colors.surface,
        borderRadius: 10,
        borderLeftWidth: 4,
        paddingVertical: Spacing.sm + 2,
        paddingHorizontal: Spacing.md,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        ...Typography.h4,
        color: Colors.text,
    },
    message: {
        ...Typography.bodySmall,
        color: Colors.textSecondary,
        marginTop: 2,
    },
});