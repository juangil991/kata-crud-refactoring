package co.com.sofka.crud.Controllers;

import co.com.sofka.crud.Dto.TodoDto;
import co.com.sofka.crud.Dto.TodoListDto;
import co.com.sofka.crud.Services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class TodoListController {
    @Autowired
    TodoListService todoListService;

    @GetMapping(value = "api/list")
    public Iterable<TodoListDto> AllTodoList(){
        return todoListService.getAllToDoList();
    }

    @PostMapping(value = "api/list")
    public TodoListDto save(@RequestBody TodoListDto todoListDto){
        return todoListService.saveToDoList(todoListDto);
    }

    @DeleteMapping(value = "api/list/{name}")
    public void deleteByGroupListId(@PathVariable("name")String name){
        todoListService.deleteToDoListByName(name);
    }
}
