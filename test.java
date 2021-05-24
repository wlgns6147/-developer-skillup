package com.spring.maria.service;

import java.util.Scanner;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		System.out.print("출력할 행 수 입력 : ");
		int inputData = sc.nextInt() + 1;

		int[][] array = new int[inputData][];

		for (int i = 0; i < inputData; i++) {
			array[i] = new int[i + 1];
		}

		for (int i = 0; i < inputData; i++) {
			for (int j = 0; j < i; j++) {
				array[i][j] = 1;
				if (i > 1 && j >= 1 && j < i - 1) {
					array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
				}
				System.out.print(array[i][j]);
			}
			System.out.print("\n");
		}
	}
}
