package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Pharmacy;
import com.example.demo.repository.PharmacyRepository;
@Service
public class PharmacyService {
	@Autowired
	PharmacyRepository pharmacyRepository;
		public Page<Pharmacy> SortingAndPaging(int page,int size,String field){
			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
			return pharmacyRepository.findAll(paging);
		}
		public Page<Pharmacy> Paging(int CurrentPage,int itemsPerPage){
			Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
			return pharmacyRepository.findAll(paging);
		}
}

