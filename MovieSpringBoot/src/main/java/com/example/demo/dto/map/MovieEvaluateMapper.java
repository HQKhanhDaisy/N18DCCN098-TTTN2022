package com.example.demo.dto.map;

import com.example.demo.dto.MovieEvaluateDto;
import com.example.demo.model.MovieEvaluate;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface MovieEvaluateMapper {
    MovieEvaluate movieEvaluateDtoToMovieEvaluate(MovieEvaluateDto movieEvaluateDto);

    MovieEvaluateDto movieEvaluateToMovieEvaluateDto(MovieEvaluate movieEvaluate);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    MovieEvaluate updateMovieEvaluateFromMovieEvaluateDto(MovieEvaluateDto movieEvaluateDto, @MappingTarget MovieEvaluate movieEvaluate);
}
