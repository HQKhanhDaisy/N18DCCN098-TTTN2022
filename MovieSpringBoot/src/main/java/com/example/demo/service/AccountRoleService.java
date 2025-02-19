package com.example.demo.service;

import com.example.demo.dto.AccountRoleDto;
import com.example.demo.model.AccountRole;

import java.util.List;

public interface AccountRoleService {
    List<AccountRole> getAllAccountRole();
    List<AccountRoleDto> getAccountRolesForUsername(String username);
}
