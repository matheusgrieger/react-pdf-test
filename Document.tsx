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

        <View style={styles.body}></View>
      </Page>
    </PdfDocument>
  );
}
