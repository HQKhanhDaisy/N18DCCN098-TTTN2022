package com.example.demo.service.implement;

import com.example.demo.dto.AccountHistoryDto;
import com.example.demo.dto.map.AccountHistoryMapper;
import com.example.demo.model.AccountHistory;
import com.example.demo.repository.AccountRepository;
import com.example.demo.repository.MovieDetailRepository;
import com.example.demo.repository.UserHistoryRepository;
import com.example.demo.service.UserHistoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class UserHistoryServiceImpl implements UserHistoryService {
    private final UserHistoryRepository userHistoryRepository;
    private final AccountHistoryMapper accountHistoryMapper;
    private final AccountRepository accountRepository;
    private final MovieDetailRepository movieDetailRepository;

    @Override
    public String createHistory(AccountHistoryDto userHistoryDTO) {
        userHistoryRepository.save(accountHistoryMapper.accountHistoryDtoToAccountHistory(userHistoryDTO));
        return "add user's history successfully";
    }

    @Override
    public void deleteUserHistoryFromAccount(int userId) {
        List<AccountHistory> userHistories = userHistoryRepository.findAll();
        userHistories.forEach(accountHistory -> {
            if (accountHistory.getAccount().getId() == userId) {
                userHistoryRepository.delete(accountHistory);
            }
        });
    }

    @Override
    public AccountHistoryDto addHistory(Integer idAcc, Integer idMovie) {
        List<AccountHistory> userHistories = userHistoryRepository.findAll();
        AccountHistory accountHistory = null;
        Date date = new Date();
        for (AccountHistory accountHistoryCheck : userHistories) {
            if (Objects.equals(accountHistoryCheck.getAccount().getId(), idAcc) && Objects.equals(accountHistoryCheck.getMovie().getId(), idMovie)) {
                accountHistory = accountHistoryCheck;
                accountHistory.setAccount(accountRepository.getById(idAcc));
                accountHistory.setMovie(movieDetailRepository.getById(idMovie));
                accountHistory.setDate(new java.sql.Date(date.getTime()));
                userHistoryRepository.save(accountHistory);
            }
        }
        if (accountHistory != null) {
            accountHistory.setAccount(accountRepository.getById(idAcc));
            accountHistory.setMovie(movieDetailRepository.getById(idMovie));
            accountHistory.setDate(new java.sql.Date(date.getTime()));
            userHistoryRepository.save(accountHistory);
        }
        assert accountHistory != null;
        return accountHistoryMapper.accountHistoryToAccountHistoryDto(accountHistory);
    }

    @Override
    public List<AccountHistoryDto> getAllByAccount(int id) {
        List<AccountHistoryDto> userHistoryDTOS = new ArrayList<>();
        for (AccountHistory accountHistory : userHistoryRepository.findAll()) {
            if (accountHistory.getAccount().getId() == id) {
                userHistoryDTOS.add(accountHistoryMapper.accountHistoryToAccountHistoryDto(accountHistory));
            }
        }
        return userHistoryDTOS;
    }
}
