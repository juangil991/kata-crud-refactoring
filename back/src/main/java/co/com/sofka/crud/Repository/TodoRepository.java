package co.com.sofka.crud.Repository;

import co.com.sofka.crud.Models.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    List<Todo> findByGroupListId(String groupListId);
}
