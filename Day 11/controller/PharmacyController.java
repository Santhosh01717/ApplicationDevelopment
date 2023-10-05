package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.xml.crypto.Data;

import org.hibernate.grammars.hql.HqlParser.SortDirectionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Pharmacy;
import com.example.demo.repository.PharmacyRepository;
import com.example.demo.service.PharmacyService;

@CrossOrigin("*")
@RestController
@RequestMapping("/employees")
public class PharmacyController {

    @Autowired
    private PharmacyRepository pharmacyRepository;
    @GetMapping(value="/get")
    public List<Pharmacy> getAllpharmacy(){
        return pharmacyRepository.findAll();
    }
    @GetMapping(value="/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
    public Page<Pharmacy> getData(@PathVariable(value="currentPage") int page,
                                              @PathVariable(value= "itemsPerPage") int size,
                                              @PathVariable(value= "sortBy") String field,
                                              @PathVariable(value= "sortOrder") String direction) {
    	Pageable paging;
   if(direction.equals("asc")) {
   paging=PageRequest.of(page-1, size).withSort(Sort.by(field));
   }
   else {
	   paging=PageRequest.of(page-1, size).withSort(Sort.by(field).descending());       
   }
  return  pharmacyRepository.findAll(paging);
    }	
    @PostMapping
    public Pharmacy createEmployee(@RequestBody Pharmacy pharmacy) {
        return pharmacyRepository.save(pharmacy);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Pharmacy>> getPharmacyById(@PathVariable  int id){
        Optional<Pharmacy> pharmacy = pharmacyRepository.findById(id);
        return ResponseEntity.ok(pharmacy);
    }

    @PutMapping("{id}")
	public Pharmacy updateBookDetails(@RequestBody Pharmacy b)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		return pharmacyRepository.save(b);		
	}
    @DeleteMapping("{id}")
	public String deleteDetails(@PathVariable int id)
	{
		pharmacyRepository.deleteById(id);
		return "Id : "+id+" is deleted";
	}
    @DeleteMapping
    public String deleteAllDetails()
    {
    	pharmacyRepository.deleteAll();
    	return "All employees deleted";
    }
}
