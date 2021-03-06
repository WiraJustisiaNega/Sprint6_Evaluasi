import React from 'react';
import {StyleSheet} from 'react-native';

export const styless = StyleSheet.create({
  gambar: {
    width: 50,
    height: 50,
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  teks: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 5,
    borderRadius: 25,
    width: 24,
    height: 24,
    position:'absolute',
    top:0,
    right:0
  },
});
