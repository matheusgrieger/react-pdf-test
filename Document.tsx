import * as React from 'react';
import {
  Document as PdfDocument,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    textTransform: 'uppercase',
    fontSize: 20,
  },
  data: {
    backgroundColor: '#e0e0e0',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 12,
  },
  dataView: {
    marginLeft: 16,
    flexDirection: 'row',
  },
  dataLabel: {
    fontWeight: 700,
    textTransform: 'uppercase',
    marginRight: 8,
  },

  body: {
    paddingTop: 48,
    paddingLeft: 24,
    paddingRight: 24,
  },
  people: {
    flexDirection: 'row',
    marginBottom: 24,
    fontSize: 14,
    lineHeight: 1.25,
  },
  from: {
    width: '35%',
    marginRight: 16,
  },
  to: {
    width: '35%',
  },
  peopleTitle: {
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: 8,
    lineHeight: 1,
  },
});

export default function Document() {
  return (
    <PdfDocument>
      <Page size="a4">
        <View style={styles.header}>
          <Text>Invoice</Text>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}>
            <Text style={styles.dataLabel}>Invoice no.</Text>
            <Text>#51</Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.dataLabel}>Date</Text>
            <Text>Sep 20 2022</Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.dataLabel}>Due</Text>
            <Text>Sep 21 2022</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.people}>
            <View style={styles.from}>
              <Text style={styles.peopleTitle}>From</Text>
              <Text>LOREM IPSUM DOLOR SIT AMET</Text>
              <Text>123 Sample Street</Text>
              <Text>City, ST, 99999</Text>
              <Text>Country</Text>
              <Text>Tax ID: 99999</Text>
            </View>
            <View style={styles.to}>
              <Text style={styles.peopleTitle}>To</Text>
              <Text>LOREM IPSUM DOLOR SIT AMET</Text>
              <Text>123 Sample Street</Text>
              <Text>City, ST, 99999</Text>
              <Text>Country</Text>
              <Text>Tax ID: 99999</Text>
            </View>
          </View>
        </View>
      </Page>
    </PdfDocument>
  );
}
