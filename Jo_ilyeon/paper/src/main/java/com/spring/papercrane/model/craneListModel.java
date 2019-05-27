package com.spring.papercrane.model;

import java.sql.Timestamp;

public class craneListModel {
	//내 글 목록 조회용
	
	// 식별 및 개별조회 시 넘길 데이터
	private int num; // 글 번호 PK NN
	private String userid; // 사용자 아이디 PK NN
	
	// 표시할 내용
	private Timestamp paperdate; // 날짜 시간

	@Override
	public String toString() {
		return "craneListModel [num=" + num + ", userid=" + userid + ", paperdate=" + paperdate + "]";
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public Timestamp getPaperdate() {
		return paperdate;
	}

	public void setPaperdate(Timestamp paperdate) {
		this.paperdate = paperdate;
	}

}
