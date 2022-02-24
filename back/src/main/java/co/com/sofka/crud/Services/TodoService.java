package co.com.sofka.crud.Services;

import co.com.sofka.crud.Dto.TodoDto;
import co.com.sofka.crud.Models.Todo;
import co.com.sofka.crud.Repository.TodoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public Iterable<TodoDto> getAllToDo(String groupListId){
        try {
            //se emplea modelMapper para mapear la entidad a el Dto y viceversa
            ModelMapper modelMapper = new ModelMapper();
            List<Todo> todoList = new ArrayList<Todo>();
            List<TodoDto> todoDtoList = new ArrayList<TodoDto>();
            if(groupListId == null) repository.findAll().forEach(todoList::add);
            else repository.findByGroupListId(groupListId).forEach(todoList::add);
            todoList.forEach((item) -> {
                todoDtoList.add(modelMapper.map(item, TodoDto.class));
            });
            return todoDtoList;
        }catch (Exception e){return null;}
    }

    public TodoDto saveToDo(TodoDto todoDto){
        try {
            ModelMapper modelMapper = new ModelMapper();
            if(todoDto.getName()!=null) {
                Todo todo = modelMapper.map(todoDto, Todo.class);
                todoDto = modelMapper.map(repository.save(todo), TodoDto.class);
                return todoDto;
            }
            else return null;
        }catch (Exception e) {return null;}
    }

    public void deleteToDoById(Long id){
        TodoDto todoDto = getTodoById(id);
        repository.deleteById(todoDto.getId());
    }
    public void deleteToDoByGroupListId(String groupListId){
        Iterable<TodoDto> todoDtos=getAllToDo(groupListId);
        todoDtos.forEach(item->{
            deleteToDoById(item.getId());
        });
    }

    public TodoDto getTodoById(Long id){
        ModelMapper modelMapper = new ModelMapper();
         return modelMapper.map(repository.findById(id).orElseThrow(),TodoDto.class);
    }

}
