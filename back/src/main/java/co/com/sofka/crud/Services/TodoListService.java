package co.com.sofka.crud.Services;

import co.com.sofka.crud.Dto.TodoDto;
import co.com.sofka.crud.Dto.TodoListDto;
import co.com.sofka.crud.Models.Todo;
import co.com.sofka.crud.Models.TodoList;
import co.com.sofka.crud.Repository.TodoListRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoListService {
    @Autowired
    TodoListRepository todoListRepository;

    public Iterable<TodoListDto> getAllToDoList(){
        try {
            ModelMapper modelMapper = new ModelMapper();
            List<TodoList> todoListList = new ArrayList<TodoList>();
            List<TodoListDto> todoListDtoList = new ArrayList<TodoListDto>();
            todoListRepository.findAll().forEach(todoListList::add);
            todoListList.forEach((item) -> {
                todoListDtoList.add(modelMapper.map(item, TodoListDto.class));
            });
            return todoListDtoList;
        }catch (Exception e){return null;}
    }

    public TodoListDto saveToDoList(TodoListDto todoListDto){
        try {
            ModelMapper modelMapper = new ModelMapper();
            if(todoListDto.getName()!=null) {
                TodoList todoList = modelMapper.map(todoListDto, TodoList.class);
                todoListDto = modelMapper.map(todoListRepository.save(todoList), TodoListDto.class);
                return todoListDto;
            }
            else return null;
        }catch (Exception e) {return null;}
    }

    public void deleteToDoListByName(String name){
        List<TodoList> todoList=todoListRepository.findByName(name);
        todoList.forEach(item->{
            todoListRepository.deleteById(item.getId());
        });
    }


}
