package co.com.sofka.crud.Repository;

import co.com.sofka.crud.Models.TodoList;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface TodoListRepository extends CrudRepository<TodoList, Long> {
    public abstract ArrayList<TodoList> findByName(String name);
}
