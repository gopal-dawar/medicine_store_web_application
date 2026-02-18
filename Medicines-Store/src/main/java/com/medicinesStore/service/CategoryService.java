package com.medicinesStore.service;

import com.medicinesStore.entity.Category;

import java.util.List;

public interface CategoryService {
    Category saveCategory(Category category);

    List<Category> getAllCategories();

    Category getCategoryById(Long id);

    Category getCategoryByName(String name);

    Category updateCategory(Long id, Category category);

    void deleteCategoryById(Long id);

    boolean existsByCategoryName(String name);


}
