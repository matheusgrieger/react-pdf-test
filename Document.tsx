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

  table: {
    marginBottom: 64,
  },
  tableHeader: {
    borderBottom: 2,
    borderBottomColor: '#c0c0c0',
    paddingBottom: 8,
    fontSize: 12,
    flexDirection: 'row',
    fontWeight: 700,
  },
  tableRow: {
    paddingTop: 8,
    paddingBottom: 8,
    borderBottom: 1,
    borderBottomColor: '#c0c0c0',
    flexDirection: 'row',
    fontSize: 14,
  },
  shortTableRow: {
    paddingTop: 8,
    paddingBottom: 8,
    borderBottom: 1,
    borderBottomColor: '#c0c0c0',
    flexDirection: 'row',
    fontSize: 14,
    marginLeft: 'auto',
    width: 260,
    justifyContent: 'space-between',
  },
  colDescription: {
    flexGrow: 1,
    paddingRight: 16,
  },
  colQuantity: {
    width: 80,
    textAlign: 'right',
    paddingRight: 16,
  },
  colRate: {
    width: 80,
    textAlign: 'right',
    paddingRight: 16,
  },
  colAmount: {
    width: 100,
    textAlign: 'right',
  },
  textRateType: {
    fontSize: 12,
    color: '#a0a0a0',
  },
  textBold: {
    fontWeight: 700,
  },
  paymentInformation: {
    padding: 24,
    backgroundColor: '#e0e0e0',
    marginLeft: 24,
    width: '50%',
    lineHeight: 1.25,
    fontSize: 14,
  },
  paymentInformationTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 16,
    lineHeight: 1,
  },
  paymentInformationSubtitle: {
    fontWeight: 700,
    marginBottom: 8,
    fontSize: 16,
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

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <View style={styles.colDescription}>
                <Text>Description</Text>
              </View>
              <View style={styles.colQuantity}>
                <Text>Quantity</Text>
              </View>
              <View style={styles.colRate}>
                <Text>Rate</Text>
              </View>
              <View style={styles.colAmount}>
                <Text>Amount</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.colDescription}>
                <Text>Lorem ipsum dolor sit amet</Text>
              </View>
              <View style={styles.colQuantity}>
                <Text>40</Text>
              </View>
              <View style={styles.colRate}>
                <Text>20</Text>
                <Text style={styles.textRateType}>(hrs)</Text>
              </View>
              <View style={styles.colAmount}>
                <Text>USD 800.00</Text>
              </View>
            </View>
            <View style={styles.shortTableRow}>
              <Text>Subtotal</Text>
              <Text>USD 800.00</Text>
            </View>
            <View style={styles.shortTableRow}>
              <Text style={styles.textBold}>Total</Text>
              <Text style={styles.textBold}>USD 800.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.paymentInformation}>
          <Text style={styles.paymentInformationTitle}>
            Payment Information
          </Text>
          <Text style={styles.paymentInformationSubtitle}>
            Intermediary bank
          </Text>
          <Text style={styles.paymentInformationSubtitle}>
            Beneficiary bank
          </Text>
          <Text style={styles.paymentInformationSubtitle}>
            Beneficiary customer instruction
          </Text>
          <Text style={styles.paymentInformationSubtitle}>Reference</Text>
        </View>
      </Page>
    </PdfDocument>
  );
}
