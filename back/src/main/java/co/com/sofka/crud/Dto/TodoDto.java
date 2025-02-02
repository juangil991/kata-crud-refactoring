package co.com.sofka.crud.Dto;

import java.io.Serializable;

public class TodoDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private boolean completed;
    private String groupListId;

    public TodoDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(String groupListId) {
        this.groupListId = groupListId;
    }
}
