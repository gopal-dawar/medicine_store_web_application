package com.medicinesStore.service.impl;

import com.medicinesStore.entity.Category;
import com.medicinesStore.exception.CategoryNotFoundException;
import com.medicinesStore.repository.CategoryRepo;
import com.medicinesStore.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {


    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public Category saveCategory(Category category) {
        return categoryRepo.save(category);
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepo.findById(id).orElseThrow(() -> new CategoryNotFoundException("Category Not Found : " + id));
    }

    @Override
    public Category getCategoryByName(String name) {
        return categoryRepo.findByName(name).orElseThrow(() -> new CategoryNotFoundException("Category Not Found : " + name));
    }

    @Override
    public Category updateCategory(Long id, Category category) {
        Category cat = categoryRepo.findById(id).orElseThrow(() -> new CategoryNotFoundException("Category Not Found : " + id));
        cat.setName(category.getName());
        cat.setDescription(category.getDescription());
        return categoryRepo.save(cat);
    }

    @Override
    public void deleteCategoryById(Long id) {
        Optional<Category> category = categoryRepo.findById(id);
        if (category.isPresent()) {
            categoryRepo.deleteById(id);
        }
    }

    @Override
    public boolean existsByCategoryName(String name) {
        return categoryRepo.findByName(name).isPresent();
    }
}
