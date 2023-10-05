package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="pharmacy")
public class Pharmacy {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String medicine_name;
	private String packing;
	private String Generic_name;
	private String supplier_name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPacking() {
		return packing;
	}
	public void setPacking(String pack) {
		this.packing = pack;
	}
	public String getMedicinename() {
		return medicine_name;
	}
	public void setMedicinename(String name) {
		this.medicine_name = name;
	}
	public String getGname() {
		return Generic_name;
	}
	public void setGname(String phone) {
		this.Generic_name = phone;
	}
	public String getSname() {
		return supplier_name;
	}
	public void setSname(String name) {
		this.supplier_name = name;
	}
//	public String getPosition() {
//		return position;
//	}
//	public void setPosition(String position) {
//		this.position = position;
//	}
	public Pharmacy(int id, String pack, String name, String g_name, String s_name) {
		super();
		this.id = id;
		this.packing = pack;
		this.medicine_name = name;
		this.Generic_name = g_name;
		this.supplier_name = s_name;
	}
	public Pharmacy() {}
}

