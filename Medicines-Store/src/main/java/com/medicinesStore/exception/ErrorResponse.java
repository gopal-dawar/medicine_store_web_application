package com.medicinesStore.exception;

import java.time.LocalDateTime;

public class ErrorResponse {
    private String msg;

    private int statuscode;

    private LocalDateTime timestamp;


    public ErrorResponse(String msg, int statuscode, LocalDateTime timestamp) {
        this.msg = msg;
        this.statuscode = statuscode;
        this.timestamp = timestamp;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getStatuscode() {
        return statuscode;
    }

    public void setStatuscode(int statuscode) {
        this.statuscode = statuscode;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
